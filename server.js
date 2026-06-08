const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const IS_DEV = PORT == 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DATA_DIR = path.join(__dirname, 'data');
const APPOINTMENTS_FILE = path.join(DATA_DIR, 'appointments.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contact_submissions.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const readJsonFile = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
};

const writeJsonFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error);
    return false;
  }
};

const ipRequestHistory = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const rateLimiter = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  if (!ipRequestHistory.has(ip)) ipRequestHistory.set(ip, []);
  const requestTimes = ipRequestHistory.get(ip).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (requestTimes.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({ success: false, message: 'Too many requests. Please try again after a minute. For urgent emergencies, call 054 433 7908.' });
  }
  requestTimes.push(now);
  ipRequestHistory.set(ip, requestTimes);
  next();
};

app.post('/api/appointments', rateLimiter, (req, res) => {
  const { name, petName, petType, service, dateTime, phone, message } = req.body;
  if (!name || !name.trim()) return res.status(400).json({ success: false, message: 'Owner name is required.' });
  if (!petName || !petName.trim()) return res.status(400).json({ success: false, message: 'Pet name is required.' });
  if (!petType || !['Cat', 'Dog', 'Other'].includes(petType)) return res.status(400).json({ success: false, message: 'Please select a valid Pet Type.' });
  if (!service || !service.trim()) return res.status(400).json({ success: false, message: 'Service type is required.' });
  if (!dateTime || isNaN(Date.parse(dateTime))) return res.status(400).json({ success: false, message: 'Please choose a valid date and time.' });
  if (!phone || !phone.trim() || phone.replace(/\D/g, '').length < 7) return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });

  const newAppointment = {
    id: 'appt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: name.trim(), petName: petName.trim(), petType,
    service: service.trim(), dateTime, phone: phone.trim(),
    message: message ? message.trim() : '',
    createdAt: new Date().toISOString()
  };

  const appointments = readJsonFile(APPOINTMENTS_FILE);
  appointments.push(newAppointment);
  if (writeJsonFile(APPOINTMENTS_FILE, appointments)) {
    return res.status(201).json({ success: true, message: 'Your appointment request has been submitted! We will contact you within 15 minutes to confirm.', data: newAppointment });
  }
  return res.status(500).json({ success: false, message: 'Internal server error. Please call us directly.' });
});

app.post('/api/contact', rateLimiter, (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !name.trim()) return res.status(400).json({ success: false, message: 'Name is required.' });
  if (!phone || !phone.trim() || phone.replace(/\D/g, '').length < 7) return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
  if (!message || !message.trim()) return res.status(400).json({ success: false, message: 'Message cannot be empty.' });
  if (email && email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });

  const newContact = {
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: name.trim(), email: email ? email.trim() : '',
    phone: phone.trim(), message: message.trim(),
    createdAt: new Date().toISOString()
  };

  const contacts = readJsonFile(CONTACTS_FILE);
  contacts.push(newContact);
  if (writeJsonFile(CONTACTS_FILE, contacts)) {
    return res.status(201).json({ success: true, message: 'Your message has been sent! We will get back to you as soon as possible.', data: newContact });
  }
  return res.status(500).json({ success: false, message: 'An error occurred. Please try again or call us.' });
});

if (!IS_DEV) {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, HOST, () => {
  console.log(`Paw Prints Vet ${IS_DEV ? 'API' : 'Server'} running on http://${HOST}:${PORT}`);
});

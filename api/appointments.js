const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join('/tmp', 'appointments.json');

const ipRequestHistory = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const readJsonFile = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
  } catch {
    return [];
  }
};

const writeJsonFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch {
    return false;
  }
};

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const ip = req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();
  if (!ipRequestHistory.has(ip)) ipRequestHistory.set(ip, []);
  const requestTimes = ipRequestHistory.get(ip).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (requestTimes.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({ success: false, message: 'Too many requests. Please try again after a minute. For urgent emergencies, call 054 433 7908.' });
  }
  requestTimes.push(now);
  ipRequestHistory.set(ip, requestTimes);

  const { name, petName, petType, service, dateTime, phone, message } = req.body;

  if (!name || !name.trim()) return res.status(400).json({ success: false, message: 'Owner name is required.' });
  if (!petName || !petName.trim()) return res.status(400).json({ success: false, message: 'Pet name is required.' });
  if (!petType || !['Cat', 'Dog', 'Other'].includes(petType)) return res.status(400).json({ success: false, message: 'Please select a valid Pet Type.' });
  if (!service || !service.trim()) return res.status(400).json({ success: false, message: 'Service type is required.' });
  if (!dateTime || isNaN(Date.parse(dateTime))) return res.status(400).json({ success: false, message: 'Please choose a valid date and time.' });
  if (!phone || !phone.trim() || phone.replace(/\D/g, '').length < 7) return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });

  const newAppointment = {
    id: 'appt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: name.trim(),
    petName: petName.trim(),
    petType,
    service: service.trim(),
    dateTime,
    phone: phone.trim(),
    message: message ? message.trim() : '',
    createdAt: new Date().toISOString()
  };

  const appointments = readJsonFile(DATA_FILE);
  appointments.push(newAppointment);
  if (writeJsonFile(DATA_FILE, appointments)) {
    return res.status(201).json({ success: true, message: 'Your appointment request has been submitted! We will contact you within 15 minutes to confirm.', data: newAppointment });
  }
  return res.status(500).json({ success: false, message: 'Internal server error. Please call us directly.' });
};

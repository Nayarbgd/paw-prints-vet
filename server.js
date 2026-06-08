const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Path to store submitted data
const DATA_DIR = path.join(__dirname, 'data');
const APPOINTMENTS_FILE = path.join(DATA_DIR, 'appointments.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contact_submissions.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper function to read/write JSON files safely
const readJsonFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
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

// In-memory rate limiting map (Simple defense against spam bots)
const ipRequestHistory = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 submissions per minute per IP

const rateLimiter = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  
  if (!ipRequestHistory.has(ip)) {
    ipRequestHistory.set(ip, []);
  }
  
  const requestTimes = ipRequestHistory.get(ip).filter(time => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (requestTimes.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again after a minute. For urgent emergencies, please call us directly at 054 433 7908.'
    });
  }
  
  requestTimes.push(now);
  ipRequestHistory.set(ip, requestTimes);
  next();
};

/**
 * POST /api/appointments
 * Saves appointment submissions to a JSON file.
 * Expected Body:
 * {
 *   name: string,
 *   petName: string,
 *   petType: 'Cat' | 'Dog' | 'Other',
 *   service: string,
 *   dateTime: string (ISO date),
 *   phone: string,
 *   message?: string
 * }
 */
app.post('/api/appointments', rateLimiter, (req, res) => {
  const { name, petName, petType, service, dateTime, phone, message } = req.body;

  // Basic Validation
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Owner name is required.' });
  }
  if (!petName || !petName.trim()) {
    return res.status(400).json({ success: false, message: 'Pet name is required.' });
  }
  if (!petType || !['Cat', 'Dog', 'Other'].includes(petType)) {
    return res.status(400).json({ success: false, message: 'Please select a valid Pet Type (Cat, Dog, or Other).' });
  }
  if (!service || !service.trim()) {
    return res.status(400).json({ success: false, message: 'Service type is required.' });
  }
  if (!dateTime || isNaN(Date.parse(dateTime))) {
    return res.status(400).json({ success: false, message: 'Please choose a valid preferred date and time.' });
  }
  if (!phone || !phone.trim() || phone.replace(/\D/g, '').length < 7) {
    return res.status(400).json({ success: false, message: 'Please enter a valid phone number (at least 7 digits).' });
  }

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

  const appointments = readJsonFile(APPOINTMENTS_FILE);
  appointments.push(newAppointment);
  
  if (writeJsonFile(APPOINTMENTS_FILE, appointments)) {
    return res.status(201).json({
      success: true,
      message: 'Your appointment request has been submitted successfully! We will contact you shortly to confirm your booking.',
      data: newAppointment
    });
  } else {
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred while saving your appointment. Please try calling us directly.'
    });
  }
});

/**
 * POST /api/contact
 * Handles contact form submissions.
 * Expected Body:
 * {
 *   name: string,
 *   email?: string,
 *   phone: string,
 *   message: string
 * }
 */
app.post('/api/contact', rateLimiter, (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic Validation
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Name is required.' });
  }
  if (!phone || !phone.trim() || phone.replace(/\D/g, '').length < 7) {
    return res.status(400).json({ success: false, message: 'Please enter a valid contact phone number.' });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ success: false, message: 'Message content cannot be empty.' });
  }

  // Simple email format check if email is provided
  if (email && email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  const newContactSubmission = {
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: name.trim(),
    email: email ? email.trim() : '',
    phone: phone.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  const contacts = readJsonFile(CONTACTS_FILE);
  contacts.push(newContactSubmission);

  if (writeJsonFile(CONTACTS_FILE, contacts)) {
    return res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you as soon as possible!',
      data: newContactSubmission
    });
  } else {
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending your message. Please try again or call us.'
    });
  }
});

// Fallback route for SPA (Single Page App) navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start listening
app.listen(PORT, () => {
  console.log(`Paw Prints Vet Server running on http://localhost:${PORT}`);
});

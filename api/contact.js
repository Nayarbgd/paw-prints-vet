const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join('/tmp', 'contact_submissions.json');

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
    return res.status(429).json({ success: false, message: 'Too many requests. Please try again after a minute.' });
  }
  requestTimes.push(now);
  ipRequestHistory.set(ip, requestTimes);

  const { name, email, phone, message } = req.body;

  if (!name || !name.trim()) return res.status(400).json({ success: false, message: 'Name is required.' });
  if (!phone || !phone.trim() || phone.replace(/\D/g, '').length < 7) return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
  if (!message || !message.trim()) return res.status(400).json({ success: false, message: 'Message cannot be empty.' });
  if (email && email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });

  const newContact = {
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: name.trim(),
    email: email ? email.trim() : '',
    phone: phone.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  const contacts = readJsonFile(DATA_FILE);
  contacts.push(newContact);
  if (writeJsonFile(DATA_FILE, contacts)) {
    return res.status(201).json({ success: true, message: 'Your message has been sent! We will get back to you as soon as possible.', data: newContact });
  }
  return res.status(500).json({ success: false, message: 'An error occurred. Please try again or call us.' });
};

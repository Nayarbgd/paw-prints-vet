const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('Starting API Tests...');

// Clean up old test data if exists
const apptFile = path.join(__dirname, 'data', 'appointments.json');
const contactFile = path.join(__dirname, 'data', 'contact_submissions.json');

try {
  if (fs.existsSync(apptFile)) fs.unlinkSync(apptFile);
  if (fs.existsSync(contactFile)) fs.unlinkSync(contactFile);
} catch (err) {
  // Ignore
}

// Spawn the server
const server = spawn('node', ['server.js'], { stdio: 'inherit' });

// Helper function to send JSON post request
function postJSON(urlPath, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: urlPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: JSON.parse(body)
        });
      });
    });

    req.on('error', (e) => reject(e));
    req.write(payload);
    req.end();
  });
}

// Run test suite after letting server start
setTimeout(async () => {
  let passed = true;

  try {
    // Test 1: Create Appointment
    console.log('\n[Test 1] Testing POST /api/appointments...');
    const apptRes = await postJSON('/api/appointments', {
      name: 'Test Owner',
      petName: 'Test Pet',
      petType: 'Dog',
      service: 'General Checkup',
      dateTime: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
      phone: '0544337908',
      message: 'Need a checkup for testing.'
    });

    console.log('Status Code:', apptRes.statusCode);
    console.log('Response:', apptRes.data);

    if (apptRes.statusCode === 201 && apptRes.data.success === true) {
      console.log('✅ Test 1 PASSED');
    } else {
      console.log('❌ Test 1 FAILED');
      passed = false;
    }

    // Test 2: Create Contact
    console.log('\n[Test 2] Testing POST /api/contact...');
    const contactRes = await postJSON('/api/contact', {
      name: 'Test Contact Name',
      phone: '0544337908',
      email: 'test@example.com',
      message: 'This is a test message.'
    });

    console.log('Status Code:', contactRes.statusCode);
    console.log('Response:', contactRes.data);

    if (contactRes.statusCode === 201 && contactRes.data.success === true) {
      console.log('✅ Test 2 PASSED');
    } else {
      console.log('❌ Test 2 FAILED');
      passed = false;
    }

    // Verify files written to disk
    console.log('\n[Test 3] Verifying data persistence on disk...');
    if (fs.existsSync(apptFile) && fs.existsSync(contactFile)) {
      console.log('appointments.json exists:', true);
      console.log('contact_submissions.json exists:', true);
      console.log('✅ Test 3 PASSED');
    } else {
      console.log('❌ Test 3 FAILED (files not found)');
      passed = false;
    }

  } catch (err) {
    console.error('Test Error:', err);
    passed = false;
  } finally {
    // Kill the server
    console.log('\nStopping server...');
    server.kill();
    
    if (passed) {
      console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY!');
      process.exit(0);
    } else {
      console.log('\n❌ SOME TESTS FAILED.');
      process.exit(1);
    }
  }
}, 2000);

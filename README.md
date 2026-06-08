# Paw Prints Veterinary Clinic Website & Backend

A complete, high-converting, mobile-responsive veterinary clinic website for **Paw Prints Veterinary Clinic** in Dubai (located in Arjan, Nas 2 Building, Shop 1). This is a revenue-generating asset with conversion-optimized CTA paths, trust signals, and direct WhatsApp integrations.

## Features

- **24/7 Premium Aesthetics**: Custom Outfit and Plus Jakarta Sans typography, vibrant coral accents, micro-animations, and warm imagery.
- **Conversion-Optimized CTA Flow**: Clickable telephone links, persistent WhatsApp widgets, and a fast appointment inquiry form.
- **Interactive Reviews**: A smooth horizontal touch-and-click slider presenting 5 genuine Dubai-centric reviews.
- **Triage & Emergency Alerts**: Eye-catching emergency badges with pulsing visual layouts.
- **Node.js Express API**: Saves submissions locally to JSON storage (`data/appointments.json` and `data/contact_submissions.json`) with basic server-side validation and simple anti-spam rate limiting.

## Project Structure

```
paw-prints-vet/
├── public/
│   ├── index.html        # Main landing page
│   ├── styles.css        # Custom CSS Design System
│   └── app.js            # Carousel & AJAX submission handlers
├── data/
│   ├── appointments.json          # Submitted appointments
│   └── contact_submissions.json   # Contact inquiry submissions
├── server.js             # Express API Server & rate limiter
├── package.json          # Dependency definition
└── README.md             # Guide documentation
```

## Setup & Running Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v16+ recommended).

### 1. Installation
Navigate to the root directory and install dependencies:
```bash
npm install
```

### 2. Start the Server
Start the Express server:
```bash
npm start
```

The server will spin up on:
```
http://localhost:3000
```
Open this address in your web browser to view the live site.

## API Documentation

### Book Appointment
- **Endpoint**: `POST /api/appointments`
- **Content-Type**: `application/json`
- **Request Body Parameters**:
  - `name` (string, required) - Owner's full name.
  - `petName` (string, required) - Pet's name.
  - `petType` (string, required) - Must be `Cat`, `Dog`, or `Other`.
  - `service` (string, required) - Service type.
  - `dateTime` (string, required) - Selected appointment ISO date/time.
  - `phone` (string, required) - Owner contact number.
  - `message` (string, optional) - Owner notes.

### Contact Support Inquiry
- **Endpoint**: `POST /api/contact`
- **Content-Type**: `application/json`
- **Request Body Parameters**:
  - `name` (string, required) - Owner's name.
  - `phone` (string, required) - Contact phone.
  - `email` (string, optional) - Contact email address.
  - `message` (string, required) - Context or question message.

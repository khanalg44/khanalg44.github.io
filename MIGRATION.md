# Migration from Flask to React/Node.js

## Overview
This document outlines the migration of the personal portfolio website from a Flask-based backend to a modern React frontend with Node.js/Express backend architecture.

## Date
February 2, 2026

## Previous Architecture (Flask)
- **Backend**: Flask (Python)
- **Frontend**: Server-side rendered HTML templates
- **Styling**: Custom CSS
- **Structure**: Monolithic application

### Files Removed
- `app.py` - Main Flask application
- `requirements.txt` - Python dependencies
- `static/css/styles.css` - Custom styles
- `templates/` directory with HTML templates:
  - `base.html`
  - `contact.html`
  - `cricket.html`
  - `home.html`
  - `quantum.html`
  - `work.html`

## New Architecture (React + Node.js)
- **Frontend**: React 18 with React Router
- **Backend**: Node.js with Express
- **Styling**: CSS modules and modern React styling
- **Build**: Separate client and server with concurrent development

### New Structure
```
client/          # React frontend
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
└── package.json

server/          # Node.js backend
├── server.js
└── package.json

package.json     # Root package for development scripts
```

## Key Changes

### Frontend Migration
- Converted static HTML templates to dynamic React components
- Implemented client-side routing with React Router
- Added modern React hooks for state management
- Maintained responsive design and accessibility

### Backend Migration
- Replaced Flask routes with Express.js endpoints
- Implemented CORS for cross-origin requests
- Added environment variable support with dotenv
- Prepared for production build serving

### Development Workflow
- Added concurrent development scripts for running both client and server
- Implemented proxy configuration for API calls during development
- Added build and deployment scripts

## Content Updates (Post-Migration)

### Home Page
- Updated with personal professional bio
- Added details about current role as Quantitative Analyst at Citigroup, NYC
- Included PhD background in physics and quantum materials research
- Added link to PhD work tutorial on phonons
- Highlighted passions for cricket data analysis and finance

### Quantum Computing Page
- Replaced generic description with personal quantum computing journey
- Added details about learning since grad school and IBM participation
- Updated "Topics of Interest" to focus on:
  - Quantum algorithms
  - Quantum machine learning
- Removed less relevant topics (cryptography, hardware)

## Benefits
- **Performance**: Client-side rendering for faster navigation
- **Maintainability**: Component-based architecture
- **Scalability**: Separate frontend and backend concerns
- **Modern Stack**: Up-to-date technologies and best practices

## Deployment
The application now supports:
- Development mode with hot reloading
- Production builds with static file serving
- Environment-based configuration

## Next Steps
- Implement proper contact form handling (email service)
- Add database integration if needed
- Consider adding testing frameworks
- Optimize bundle sizes and performance
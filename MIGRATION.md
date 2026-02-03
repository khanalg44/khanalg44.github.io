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
- Updated with professional bio highlighting quantitative analyst role at Citigroup, NYC
- Added details about building pricing and risk analysis libraries
- Included PhD background in Physics with focus on quantum materials research
- Integrated profile picture with circular styling
- Added LinkedIn and GitHub social links
- Streamlined heading to "Hi there,"

### Cricket Page
- Updated to focus on data-driven cricket analysis
- Emphasized statistical trends and player performance analysis
- Simplified to single professional paragraph

### Contact Page
- Removed as standalone page
- Integrated social links (LinkedIn, GitHub) into home page
- Simplified navigation to Home and Cricket only

## Design Evolution

### Initial Design (White Background)
- Clean white background
- Standard link colors
- Traditional navigation

### Current Design (Dark Space Theme)
- Inspired by Stellar HTML5 template
- Dark space-themed background (#2d3142) with subtle dot pattern
- Light blue accent color (#8cc9f0) for links and highlights
- Circular profile picture with elegant border styling
- Mobile-responsive with adaptive layouts
- Lighter font weights (300) for modern aesthetic
- Transparent header/footer with subtle borders

## Benefits
- **Performance**: Client-side rendering for faster navigation
- **Maintainability**: Component-based architecture
- **Scalability**: Separate frontend and backend concerns
- **Modern Stack**: Up-to-date technologies and best practices
- **Deployment**: GitHub Pages integration with custom domain

## Deployment
The application now supports:
- Development mode with hot reloading
- Production builds with static file serving
- Environment-based configuration
- GitHub Pages deployment via gh-pages package
- Custom domain support (ghanashyamkhanal.com)
- Automated deployment from master branch only

## Next Steps
- Deploy to GitHub Pages with custom domain
- Add cricket analysis articles
- Consider adding blog functionality
- Optimize performance and SEO
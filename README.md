# Personal Portfolio - React & Node.js

A modern, responsive personal portfolio website built with React frontend and Node.js/Express backend, featuring a dark space-themed design.

## Features

- **Home Page**: Professional introduction with profile picture and social links
- **Cricket Page**: Cricket data analysis content
- **Responsive Design**: Mobile-friendly with dark modern UI inspired by Stellar template
- **Client-side Routing**: React Router for navigation
- **GitHub Pages Deployment**: Automated deployment with custom domain support
- **Enhanced Security**: Helmet.js, rate limiting, input validation, CORS protection

## Tech Stack

- **Frontend**: React 18, React Router, CSS
- **Backend**: Node.js, Express.js
- **Security**: Helmet.js, express-rate-limit, validator
- **Deployment**: GitHub Pages with custom domain (ghanashyamkhanal.com)
- **Development**: Concurrently for running both client and server

## Installation

1. Clone the repository
2. Install all dependencies:

   ```bash
   npm run install-all
   ```

   Or install client and server separately:
   ```bash
   npm run install-client
   npm run install-server
   ```

## Development

Run both client and server concurrently:

```bash
npm run dev
```

This will start:

- React development server on `http://localhost:3000` (access your app here)
- Node.js server on `http://localhost:3002` (API server)

**Important**: Access your React app at `http://localhost:3000`, not the API server port.

1. Build the React app:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

The production server will serve the built React app and handle API requests.

## Security

This project implements comprehensive security measures:

- **Helmet.js**: Security headers (CSP, X-Frame-Options, X-XSS-Protection)
- **CORS Protection**: Restricted to specific domains
- **Rate Limiting**: API endpoints limited to 5 requests per 15 minutes
- **Input Validation**: All form inputs validated and sanitized
- **Payload Limits**: Request body size limited to 10kb
- **XSS Prevention**: Input escaping and React's built-in protection
- **HTTPS**: Automatic SSL via GitHub Pages

For detailed security information, see [SECURITY.md](SECURITY.md).

## Deployment

Deploy to GitHub Pages:

```bash
./deploy.sh
```

**Note**: Deployment must be done from the `master` branch. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Project Structure

```
personal-portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   ├── images/         # Profile pictures
│   │   ├── CNAME           # Custom domain
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── Header.js
│       │   ├── Header.css
│       │   ├── Footer.js
│       │   └── Footer.css
│       ├── pages/
│       │   ├── Home.js
│       │   ├── Home.css
│       │   ├── Cricket.js
│       │   └── Contact.js (deprecated)
│       ├── App.js
│       ├── App.css
│       └── index.js
├── server/                 # Node.js backend
│   └── server.js
├── deploy.sh              # GitHub Pages deployment script
├── package.json           # Root package.json for scripts
└── README.md             # This file
```

## Design

The site features a modern dark theme inspired by the Stellar template:
- Dark space-themed background with subtle dot pattern
- Light blue accent color (#8cc9f0)
- Circular profile picture with elegant styling
- Mobile-responsive layout
- Clean typography with light font weights

## Author

Ghanashyam Khanal - Quantitative Analyst at Citigroup, NYC

## License

This project is open source and available under the [MIT License](LICENSE).

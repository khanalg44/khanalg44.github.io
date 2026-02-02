# Personal Portfolio - React & Node.js

A modern, responsive personal portfolio website built with React frontend and Node.js/Express backend.

## Features

- **Home Page**: Introduction and overview
- **Cricket Page**: Cricket-related content
- **Quantum Computing Page**: Technical content about quantum computing
- **Contact Page**: Contact form and social media links (LinkedIn & GitHub)
- **Responsive Design**: Clean, modern UI with React components
- **RESTful API**: Node.js backend with Express
- **Client-side Routing**: React Router for navigation

## Tech Stack

- **Frontend**: React 18, React Router, CSS
- **Backend**: Node.js, Express.js
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

## Project Structure

```
personal-portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── Header.js
│       │   └── Footer.js
│       ├── pages/
│       │   ├── Home.js
│       │   ├── Cricket.js
│       │   ├── Quantum.js
│       │   └── Contact.js
│       ├── App.js
│       └── index.js
├── server/                 # Node.js backend
│   └── server.js
├── package.json           # Root package.json for scripts
└── README.md             # This file
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Handle contact form submissions

## Author

Ghanashyam Khanal

## License

This project is open source and available under the [MIT License](LICENSE).
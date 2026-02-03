const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const validator = require('validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      // 'unsafe-inline' is currently required to support existing React/CSS-in-JS inline styles.
      // TODO: Migrate to a nonce- or hash-based CSP for styles and then remove 'unsafe-inline'.
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// CORS configuration - restrict to your domain
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://ghanashyamkhanal.com', 'https://www.ghanashyamkhanal.com']
    : 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rate limiting for API endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 20 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Body parsing middleware
app.use(express.json({ limit: '10kb' })); // Limit payload size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Contact form endpoint with validation and rate limiting
app.post('/api/contact', apiLimiter, (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email address' 
    });
  }

  // Validate field lengths
  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name must be between 2 and 100 characters' 
    });
  }

  if (message.length < 10 || message.length > 1000) {
    return res.status(400).json({ 
      success: false, 
      message: 'Message must be between 10 and 1000 characters' 
    });
  }

  // Normalize inputs; apply HTML encoding only when rendering into HTML
  const normalizedName = name.trim();
  const normalizedEmail = validator.normalizeEmail(email);
  const normalizedMessage = message.trim();

  console.log('Contact form submission:', { 
    name: normalizedName, 
    email: normalizedEmail, 
    message: normalizedMessage 
  });

  // TODO: In production, implement actual email sending
  // Options: nodemailer, SendGrid, AWS SES, or a service like Formspree
  // For now, this is a placeholder that logs the data

  res.json({ 
    success: true, 
    message: 'Thank you for your message. I will get back to you soon!' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
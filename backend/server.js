const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// Direct Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to: ${req.url}`);
  next();
});

// Routes
app.use('/api', apiRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Voltrac Energy mock REST API server.',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      blogs: '/api/blogs',
      contact: '/api/contact',
      complaint: '/api/complaint',
      partner: '/api/partner'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(` Voltrac Energy Mock Server running on port ${PORT}`);
  console.log(` Access API: http://localhost:${PORT}`);
  console.log(`===================================================`);
});

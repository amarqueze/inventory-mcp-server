const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Import routes
const testRoutes = require('./routes/test');
app.use('/api', testRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Inventory MCP Server is running');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
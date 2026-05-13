const express = require('express');
const db = require('../db');

const router = express.Router();

// Simple health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Endpoint to test database connection
router.get('/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW() as now');
    res.json({ success: true, time: result.rows[0].now });
  } catch (error) {
    console.error('Database test error:', error);
    res.status(500).json({ success: false, error: 'Database connection failed' });
  }
});

module.exports = router;
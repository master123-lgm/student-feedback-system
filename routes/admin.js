const express = require('express');
const router = express.Router();

// Hardcoded admin credentials (secure it later with env)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;

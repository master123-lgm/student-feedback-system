const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// ✅ Add this GET route
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// POST /api/feedback - submit feedback
router.post('/', async (req, res) => {
  const { name, email, course, feedback } = req.body;

  try {
    const newFeedback = new Feedback({
      name,
      email,
      course,
      message: feedback  // saving feedback into 'message' field in DB
    });

    await newFeedback.save(); // Save to MongoDB

    console.log(' Feedback saved to DB:', newFeedback);
    res.status(201).json({ success: true, message: 'Feedback submitted successfully!' });

  } catch (err) {
    console.error(' Error saving feedback:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});
// GET /api/feedback - fetch all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});
// GET /api/feedback - get all feedback
router.get('/', async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbackList);
  } catch (err) {
    console.error('Error fetching feedback:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


module.exports = router;
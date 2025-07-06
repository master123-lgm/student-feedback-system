const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  message: String
}, {
  timestamps: true // ✅ Adds createdAt and updatedAt fields
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  message: String
}, { timestamps: true }); // Adds createdAt and updatedAt

});

module.exports = mongoose.model('Feedback', feedbackSchema);

const express = require('express');
const mongoose = require('mongoose');
const feedbackRoutes = require('./routes/feedback');
const path = require('path');

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://brianmringo2:YR6v18SWxEpVOsmB@cluster0.qv9dizu.mongodb.net/feedbackDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB Atlas connection error:', err));

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/feedback', feedbackRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Student Feedback API is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

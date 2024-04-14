const mongoose = require('mongoose');

const emotionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Other fields as needed
});

const Emotion = mongoose.model('User', emotionSchema);

module.exports = User;

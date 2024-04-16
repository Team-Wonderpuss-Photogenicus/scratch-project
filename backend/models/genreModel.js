const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  genreName: { type: String, required: true },
  code: { type: String, required: true },
  // Other fields as needed
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;

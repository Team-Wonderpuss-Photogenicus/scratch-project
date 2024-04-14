const express = require('express');
const MoviesController = require('../controllers/moviesController');
const router = express.Router();

router.get('/:genreId', moviesController.getByFilters, (req, res) => {
  return res.json(res.locals.movies);
});

module.exports = router;
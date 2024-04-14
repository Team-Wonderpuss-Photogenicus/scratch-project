const express = require('express');
const moviesController = require('../controllers/moviesController');
const router = express.Router();

router.get('/:genreId', moviesController.getByFilters, (req, res) => {
  return res.json(res.locals.movies);
});

module.exports = router;

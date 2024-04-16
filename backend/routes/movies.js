const express = require('express');
const moviesController = require('../controllers/moviesController');
const router = express.Router();

router.get('/movie-list/:genreId', moviesController.getMovieList, (req, res) => {
  res.status(201).send(res.locals.movieList);
});

router.get('movies/:id', moviesController.getMovieDetails, (req, res) => {
  res.status(201).send(res.locals.movieDetails);
});

module.exports = router;

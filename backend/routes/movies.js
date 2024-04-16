const express = require('express');
const moviesController = require('../controllers/moviesController');
const router = express.Router();

router.get('/list/:with_genres', moviesController.getMovieList, (req, res) => {
  res.status(201).send(res.locals.list);
});

router.get('/details/:movie_id', moviesController.getMovieDetails, (req, res) => {
  res.status(201).send(res.locals.details);
});

router.get('/watch/:movie_id', moviesController.getWatchProviders, (req, res) => {
  res.status(201).send(res.locals.providers);
});


module.exports = router;

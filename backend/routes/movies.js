const express = require('express');
const moviesController = require('../controllers/moviesController');
const fileController = require('../controllers/fileController.js');
const router = express.Router();

router.post(
  '/',
  fileController.getMappingEmotions,
  moviesController.getMovieList,
  (req, res) => {
    res.status(201).send(res.locals.list);
  }
);

router.get('/list/:with_genres', moviesController.getMovieList, (req, res) => {
  res.status(201).send(res.locals.list);
});

router.get(
  '/details/:movie_id',
  moviesController.getMovieDetails,
  (req, res) => {
    res.status(201).send(res.locals.details);
  }
);

module.exports = router;

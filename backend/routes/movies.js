const express = require('express');
const MoviesController = require('../controllers/moviesController');
const router = express.Router();

router.get('/', MoviesController.getByFilters, (req, res) => {
  return res.json(res.locals.results);
});

module.exports = router;
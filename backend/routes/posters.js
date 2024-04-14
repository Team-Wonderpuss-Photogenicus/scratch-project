const express = require('express');
const postersController = require('../controllers/postersController.js');
const router = express.Router();

router.get('/:genreId', postersController.getMovieList, (req, res) => {
  res.json();
});
router.get(
  '/movies/:movieId',
  postersController.getMovieDetails,
  (req, res) => {
    // console.log('route ->', req.params.movieId);
    res.json();
  }
);

module.exports = router;

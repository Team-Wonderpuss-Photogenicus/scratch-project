const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController.js');

router.get('/', (req, res) => {
  res.json({ message: 'Hello from file!' });
});

router.get('/mapping', fileController.getMappingEmotions, (req, res) => {
  res.json(res.locals.characters);
});

module.exports = router;

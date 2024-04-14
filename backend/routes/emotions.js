const emotionsController = require('../controllers/emotionsController.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from emotions api' });
});

router.post('/', emotionsController.getEmotion, (req, res) => {
  res.json(res.locals.emotion);
});

module.exports = router;

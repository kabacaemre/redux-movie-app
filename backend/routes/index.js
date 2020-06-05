const express = require('express');

const movie = require('./movie');

const router = express.Router();

router.use("/movies", movie);

module.exports = router;
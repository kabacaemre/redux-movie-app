const express = require('express');

const { getAllMovie, getSingleMovie } = require('../controllers/movie');

const router = express.Router();

router.get("/", getAllMovie);
router.get("/:id", getSingleMovie);
 
module.exports = router;
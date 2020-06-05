const Movie = require('../models/movie');
const CustomError = require('../helpers/CustomError');
const asyncHandler = require('express-async-handler');

const getAllMovie = asyncHandler(async (req, res, next) => {
    const movies = await Movie.find();
    return res.status(200).json({ 
        success: true, 
        data: movies 
    });
});

const getSingleMovie = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    return res.status(200).json({ 
        success: true, 
        data: movie 
    });
});

module.exports = {
    getAllMovie, getSingleMovie
};
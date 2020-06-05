import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ movie }) => {
    return (
        <li>
            <Link to={`/movies/${movie._id}`}>
                <img src={movie.poster} alt={movie.title} />
                <div className="shadow">
                    <strong className="title">{movie.title}</strong>
                    <span className="info">{movie.category}, {movie.year}</span>
                    <span className="duration">{movie.duration} mn.</span>
                </div>
            </Link>
        </li>
    )
}

export default Movie;
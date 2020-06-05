import React from 'react';

const Movie = ({movie}) => {
    return (
        <div className="row">
            <div className="detailImg">
                <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="detailDesc">
                <h1>{movie.title}</h1>
                <ul className="infoList">
                    <li>
                        <b>Year:</b>
                        <span>{movie.year}</span>
                    </li>
                    <li>
                        <b>Duration:</b>
                        <span>{movie.duration} mn.</span>
                    </li>
                    <li>
                        <b>Director:</b>
                        <span>{movie.director}</span>
                    </li>
                    <li>
                        <b>Actor:</b>
                        <span>{movie.actor}</span>
                    </li>
                    <li>
                        <b>Category:</b>
        
                        <span>{movie.category}</span>
                    </li>
                </ul>
                <p>
                    {movie.desc}
                </p>
            </div>
        </div>
    )
}

export default Movie;
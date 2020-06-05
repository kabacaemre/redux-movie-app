import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchMovies } from '../../actions/moviesActions';

import Movie from './Movie';

const MovieList = ({ dispatch, loading, movies, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  const renderMovies = () => {
    if (loading) return <p>Loading...</p>
    if (hasErrors) return <p>Error!!!</p>
    return <ul className="movieList">{movies.map(movie => <Movie key={movie._id} movie={movie} />)}</ul>
  }

  return (
    <div className="container">
      {renderMovies()}
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movies: state.movies.movies,
  hasErrors: state.movies.hasErrors,
});

export default connect(mapStateToProps)(MovieList);

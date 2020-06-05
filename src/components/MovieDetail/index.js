import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchMovie } from '../../actions/movieActions';

import Movie from './Movie';

const MovieDetail = ({
  match,
  dispatch,
  movie,
  hasErrors,
  loading
}) => {
  useEffect(() => {
    const { id } = match.params
    dispatch(fetchMovie(id))
  }, [dispatch, match]);

  const renderMovie = () => {
    if (loading) return <p>Loading...</p>
    if (hasErrors) return <p>Error!!!</p>
    return <Movie movie={movie} />
  }

  return (
    <div className="container">
        {renderMovie()}
    </div>
  )
}

const mapStateToProps = state => ({
  movie: state.movie.movie,
  loading: state.movie.loading,
  hasErrors: state.movie.hasErrors,
})

export default connect(mapStateToProps)(MovieDetail)

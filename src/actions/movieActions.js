import { API_BASE } from '../config/env';

export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_FAILURE = 'GET_MOVIE_FAILURE';

export const getMovie = () => ({ type: GET_MOVIE });

export const getMovieSuccess = movie => ({
  type: GET_MOVIE_SUCCESS,
  payload: movie,
});

export const getMovieFailure = () => ({ type: GET_MOVIE_FAILURE });

export function fetchMovie(id) {
  return async dispatch => {
    dispatch(getMovie());
    try {
      const response = await fetch(`${API_BASE}/movies/${id}`);
      const data = await response.json();
      dispatch(getMovieSuccess(data.data));
    } catch (error) {
      dispatch(getMovieFailure());
    }
  }
}

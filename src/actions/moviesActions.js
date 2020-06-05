import { API_BASE } from '../config/env';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

export const getMovies = () => ({ type: GET_MOVIES });

export const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

export const getMoviesFailure = () => ({ type: GET_MOVIES_FAILURE });

export function fetchMovies() {
  return async dispatch => {
    dispatch(getMovies());
    try {
      const response = await fetch(`${API_BASE}/movies`);
      const data = await response.json();
      dispatch(getMoviesSuccess(data.data));
    } catch (error) {
      dispatch(getMoviesFailure());
    }
  }
}

import * as actions from '../actions/movieActions';

export const initialState = {
  loading: true,
  hasErrors: false,
  movie: {},
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MOVIE:
      return { ...state, loading: true }
    case actions.GET_MOVIE_SUCCESS:
      return { movie: action.payload, loading: false, hasErrors: false }
    case actions.GET_MOVIE_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}

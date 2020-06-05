import * as actions from '../actions/moviesActions';

export const initialState = {
  loading: false,
  hasErrors: false,
  movies: [],
}

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MOVIES:
      return { ...state, loading: true }
    case actions.GET_MOVIES_SUCCESS:
      return { movies: action.payload, loading: false, hasErrors: false }
    case actions.GET_MOVIES_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}

import { FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS } from "../actions";

const initialState = {
  characters: [],
  error: '',
  isLoading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_REQUEST:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case FETCH_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      }
    default:
      return state;
  }
};

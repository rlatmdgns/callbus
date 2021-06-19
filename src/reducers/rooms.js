  
import {LOAD_ROOMS_REQUEST, LOAD_ROOMS_SUCCESS, LOAD_ROOMS_FAIL } from '../actions';

export const initalState = {
  rooms:[],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_ROOMS_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case LOAD_ROOMS_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginDone: true,
        rooms: action.data,
      };
    case LOAD_ROOMS_FAIL:
      return {
        ...state,
        loginLoading: false,
        loginError: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
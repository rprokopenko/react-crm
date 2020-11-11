import { SET_USERS, SET_LOADED, SET_SEARCH } from '../types';

const initialState = {
  items: [],
  isLoaded: false,
  filterName: '',
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case SET_SEARCH:
      return {
        ...state,
        filterName: action.payload,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default users;

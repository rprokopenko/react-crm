import { SET_USERS, SET_LOADED, SET_SEARCH, ADD_USER } from '../types';

const initialState = {
  items: [],
  isLoaded: false,
  filterName: '',
  addUser: {
    name: '',
    proffession: '',
    skills: '',
    location: '',
  },
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
    case ADD_USER:
      return {
        ...state,
        addUser: action.payload,
      };

    default:
      return state;
  }
};

export default users;

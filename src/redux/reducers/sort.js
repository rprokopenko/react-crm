import { SET_SORT } from '../types';

const initialState = {
  sortType: false,
};

const sort = (state = initialState, action) => {
  if (action.type === SET_SORT) {
    return {
      ...state,
      sortType: action.payload,
    };
  }
  return state;
};

export default sort;

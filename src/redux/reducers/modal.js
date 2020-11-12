import { SET_OPEN } from '../types';

const initialState = {
  openType: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        openType: action.payload,
      };

    default:
      return state;
  }
};

export default modal;

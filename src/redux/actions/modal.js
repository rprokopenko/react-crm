import { SET_OPEN } from '../types';

export const setOpen = (type) => ({
  type: SET_OPEN,
  payload: type,
});

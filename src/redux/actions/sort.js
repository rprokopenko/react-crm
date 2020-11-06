import { SET_SORT } from '../types';

export const setSort = (type) => ({
  type: SET_SORT,
  payload: type,
});

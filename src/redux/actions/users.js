import { SET_USERS } from '../types';

export const setUsers = (items) => ({
  type: SET_USERS,
  payload: items,
});

import axios from 'axios';

import { SET_USERS, SET_LOADED, SET_SEARCH } from '../types';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const fetchUsers = () => (dispatch) => {
  dispatch({
    type: SET_LOADED,
    payload: false,
  });

  axios.get('/users').then(({ data }) => {
    dispatch(setUsers(data));
  });
};

export const setUsers = (items) => ({
  type: SET_USERS,
  payload: items,
});

export const setSearch = (filterName) => ({
  type: SET_SEARCH,
  payload: filterName,
});

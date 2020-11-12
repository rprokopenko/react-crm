import { combineReducers } from 'redux';

import sort from './sort';
import users from './users';
import modal from './modal';

const rootReducer = combineReducers({
  sort,
  users,
  modal,
});

export default rootReducer;

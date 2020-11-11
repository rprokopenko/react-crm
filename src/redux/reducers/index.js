import { combineReducers } from 'redux';

import sort from './sort';
import users from './users';

const rootReducer = combineReducers({
  sort,
  users,
});

export default rootReducer;

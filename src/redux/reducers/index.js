import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sort from './sort';
import users from './users';
import modal from './modal';

const rootReducer = combineReducers({
  sort,
  users,
  modal,
  form: formReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

// import flashMessages from '../reducers/flashMessages';
import auth from './authReducer';
import users from './usersReducer';

export default combineReducers({
  // flashMessages,
  auth,
  users
});

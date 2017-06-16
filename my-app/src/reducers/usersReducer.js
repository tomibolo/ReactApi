import { GET_USERS } from '../actions/types';

const initialState = {
  user: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_USERS:
      return {
        users: action.users
      };
    default: return state;
  }
}

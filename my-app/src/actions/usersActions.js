import axios from 'axios';
import { GET_USERS } from './types';

export function getUsersAction(users) {
  return {
    type: GET_USERS,
    users: users
  };
}


export function getUsersRequest() {
  return dispatch => {
    return axios.get('http://localhost:8000/users').then(response => {
      dispatch(getUsersAction(response.data.users));
    });
  }
}

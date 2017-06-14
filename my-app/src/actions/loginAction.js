import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function userLoginRequest(userData)
{
  return dispatch =>
    {
      return axios.post('http://localhost:8000/login', userData).then(response => {
        const token = response.data.access_token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUserRequest(jwtDecode(token)));
      });
    }
}

export function setCurrentUserRequest(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userLogOutRequest() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUserRequest({}));
  }
}

// const token = response.data.access_token;
// let config = {
//     headers: {
//         'Authorization': 'Bearer ' + token
//       }
//     }
// axios.get('http://localhost:8000/users',config)
//   .then(function (response) {
//     console.log('users');
//     console.log(response);
//     /*Aca va el otro axios*/
//
//     /* hasta aca */
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

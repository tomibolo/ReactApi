import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from 'lodash/isEmpty';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { isTokenExpired } from '../utils/authService';

const initialState = {
  isAuthenticated: false,
  user: {}
};

let token = localStorage['jwtToken'];

//Levanto sesion en caso que este logueado.
if( !isEmpty(token) && !isTokenExpired(token)){
  initialState.isAuthenticated = true;
  initialState.user = jwtDecode(token);
  setAuthorizationToken(token);
}


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default: return state;
  }
}

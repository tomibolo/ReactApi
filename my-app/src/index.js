import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './config/rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

//Routes
import Routes from './config/routes';

// import App from './App';
const api = document.getElementById('root');

//Redux
const store = createStore(
	rootReducer,
   compose(
     applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
   )
);
ReactDOM.render(
	<Provider  store={store}>
		<Routes />
	</Provider>
, api);


registerServiceWorker();

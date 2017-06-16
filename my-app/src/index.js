import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './reducers/combineReducers';
import { getUsersRequest } from './actions/usersActions';

//Routes
import Routes from './config/routes';

// import App from './App';
const api = document.getElementById('root');

//Redux -> Middleware
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result
}

//Redux -> Store
const store = createStore(
	combineReducers,
   compose(
     applyMiddleware(thunk,logger),
     window.devToolsExtension ? window.devToolsExtension() : f => f
   )
);

store.dispatch(getUsersRequest());


ReactDOM.render(
	<Provider  store={store}>
		<Routes />
	</Provider>
, api);


registerServiceWorker();

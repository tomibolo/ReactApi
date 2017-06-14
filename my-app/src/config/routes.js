import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from '../components/Home';
import Contenido from '../components/Contenido';
import LoginPage from '../components/LoginPage';

import requireAuth from '../utils/requireAuth';

class Routes extends Component
{
	render()
	{
		return (
        <Router history={ createHistory() }>
          <div>
      				<Switch>
  							<Route exact path="/" component={Home} />
								<Route exact path="/Home" component={Home} />
								<Route exact path="/contenido" component={requireAuth(Contenido)} />
								<Route exact path="/login" component={LoginPage} />
  							<Route render = {
  								function () {
  									return <div>
  														<p>No se encuentra la pagina</p>
  												</div>
  								}
  							}
  							/>
  						</Switch>
          </div>
        </Router>
			);

	}
}

export default Routes;

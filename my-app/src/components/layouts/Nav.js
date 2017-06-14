import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';

class Nav extends Component
{
	logout(e) {
    e.preventDefault();
    this.props.logout();
  }

	render()
	{
		const { isAuthenticated } = this.props.auth;

		let logButton = null;

		let contenidoButton = null;

		var style = {
			width: '100%'
		}

		if(!isAuthenticated){
			logButton = <li className="pull-right" role="presentation"><NavLink to="/login" exact activeClassName="active">Login</NavLink></li>;
		}	else {
			contenidoButton = <li role="presentation"><NavLink to="/contenido" exact activeClassName="active">Contenido</NavLink></li>;
			logButton = <li className="pull-right"><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>;
		}

		return (
				<div className="container-fluid">
					<div className="nav nav-header">
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav" style={style}>
								<li role="presentation"><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
								{contenidoButton}
								{logButton}
							</ul>
						</div>
					</div>
					<hr />
				</div>
			);

	}
}

Nav.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Nav);


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/loginAction';

//Styles
require('../Login.css');

class LoginForm extends Component
{

	constructor()
	{
		super();
		this.state = {
			email : '',
			password: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e)
	{
		this.setState({ [e.target.name] : e.target.value });
	}

	onSubmit(e)
	{
		e.preventDefault();

		this.props.userLoginRequest(this.state)
			.then(
				() => {
					this.props.history.push('/')
				}
			)
	}

	render()
	{
		return (
					<div className="container">
			        <div className="card card-container">
			            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" />
			            <p id="profile-name" className="profile-name-card"></p>
			            <form className="form-signin" onSubmit={this.onSubmit}>

			                <input
												type="email"
												id="inputEmail"
												name="email"
												value={this.state.email}
												onChange={this.onChange}
												className="form-control"
												placeholder="Email address"
												required />

			                <input
												type="password"
												id="inputPassword"
												name="password"
												value={this.state.password}
												onChange={this.onChange}
												className="form-control"
												placeholder="Password"
												required />

			                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Login</button>
			            </form>
			        </div>
			    </div>
			);

	}
}

LoginForm.propTypes = {
	userLoginRequest: PropTypes.func.isRequired
}

export default connect( (state) => { return {} }, { userLoginRequest } )(LoginForm);

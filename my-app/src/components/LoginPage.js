
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import LoginForm from './Forms/LoginForm';

class LoginPage extends Component
{
	render()
	{
		const { userLoginRequest } = this.props;
		return (
				<div>
					<Nav />
							<LoginForm history={this.props.history} />
	        <Footer />
				</div>
			);

	}
}

export default LoginPage;

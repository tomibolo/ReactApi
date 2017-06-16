
import React, { Component } from 'react';

//Components
import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import LoginForm from './Forms/LoginForm';

class LoginPage extends Component
{
	render()
	{
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

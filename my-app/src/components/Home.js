import React, { Component } from 'react';

import Nav from './layouts/Nav';
import Footer from './layouts/Footer';

class Home extends Component
{

	render()
	{
		return (
				<div>
					<Nav />
						<div>
							<h1>HOME</h1>
						</div>
	        <Footer />
				</div>
			);

	}
}

export default Home;

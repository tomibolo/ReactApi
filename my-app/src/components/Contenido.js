import React, { Component } from 'react';

import Nav from './layouts/Nav';
import Footer from './layouts/Footer';

class Contenido extends Component
{

	render()
	{
		return (
				<div>
					<Nav />
					<div>
						<h1>Contenido</h1>
					</div>
	        <Footer />
				</div>
			);

	}
}

export default Contenido;

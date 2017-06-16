import React from 'react';
import { connect } from 'react-redux';

import Nav from './layouts/Nav';
import Footer from './layouts/Footer';



const Users = ({ users }) => {
		console.log(users);
		console.log(1);
		return (
				<div>
					<Nav />
					<div>
						<h1>Usuarios</h1>
						{/* {users.map(user =>
							<tr key={user.id}>
								<td>{user.name}</td>
							</tr>
						)} */}
					</div>
	        <Footer />
				</div>
		);
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Users);

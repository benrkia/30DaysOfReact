import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {

	return (
		<nav>
			<ul>
				<li>
					<NavLink exact to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/404'>Not Found</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
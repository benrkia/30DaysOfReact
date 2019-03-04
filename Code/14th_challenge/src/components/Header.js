import React, { Component } from 'react';

class Header extends Component {

	render() {
		const date = new Date();

		return (
			<header className='todo-header'>
				<div className='todo-header-wrapper'>
					<h1>Hola</h1>
					<p>{
						date.toDateString()
					}</p>
				</div>
			</header>
		);
	}
}

export default Header;
import React from 'react';

const Header = () => {

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

export default Header;
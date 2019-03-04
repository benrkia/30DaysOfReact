import React, { Component } from 'react';

import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import './App.css'

// let uniqid = require('uniqid')

class App extends Component {

	render() {

		return (
			<div>
				<Header />
				<AddTask />
				<Tasks />
			</div>
		);
	}
}

export default App;
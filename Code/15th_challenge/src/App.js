import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './layouts/Nav';
import NotFound from './pages/NotFound';
import Post from './components/Post';
import Posts from './components/Posts';

import './App.css'

class App extends Component {

	render() {

		return (
			<Router>
				<div>
					<Nav />
					<div className='container'>
						<Switch>
							<Route exact path="/" component={Posts} />
							<Route path="/posts/:postId" component={Post} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
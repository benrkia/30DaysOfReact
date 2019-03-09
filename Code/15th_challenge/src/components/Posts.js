import React, { Component } from 'react';

import Entry from './Entry';

class Posts extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			posts: [],
		}
	}

	componentDidMount() {

		this.setState({loading: true});

		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(posts => {
			this.setState({posts, loading: false});
		});
	}

	render() {
		const {loading, posts} = this.state;
	
		return (

			<div className='posts'>
				{loading ?
					<h1>Loading...</h1>
					:
					posts.map(post => <Entry key={post.id} title={post.title} id={post.id} />)
				}
			</div>
		);
	}

}

export default Posts;
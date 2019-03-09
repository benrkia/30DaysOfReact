import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

class Post extends Component {

	constructor(props) {
		super(props);

		this.state = {
			error: {},
			loading: false,
			post: {},
		}
	}

	componentDidMount() {

		this.setState({loading: true});

		const {params: {postId}} = this.props.match;

		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(response => {
			
			if(!response.ok) {
				return Promise.reject(response.status);
			}
			
			return response.json();
		})
		.then(post => {
			this.setState({post, loading: false});
		}).catch(status => {
			this.setState({error: {status}});
		});
	}

	render() {
		const {loading, post, error: {status}} = this.state;

		return (

			<React.Fragment>
				{status ?
					<Route render={() => <Redirect to={{ pathname: `/${status}`}} /> } />
					:
					<div className='post'>
						{loading ?
							<h1>Loading...</h1>
							:
							<React.Fragment>
								<h3>{post.title}</h3>
								<p>{post.body}</p>
							</React.Fragment>
						}
					</div>
				}
			</React.Fragment>
		);
	}
}

export default Post;
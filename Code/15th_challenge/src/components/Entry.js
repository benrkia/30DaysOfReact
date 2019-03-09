import React from 'react';
import { Link } from "react-router-dom";

const Entry = (props) => {

	const {id, title} = props;

	return (
		
		<div className='entry'>
			<h3>{title}</h3>
			<Link to={`/posts/${id}`}>Read more</Link>
		</div>
	);
}

export default Entry;
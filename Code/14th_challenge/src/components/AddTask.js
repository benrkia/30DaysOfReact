import React, { Component } from 'react';

class AddTask extends Component {

	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			taskDescription: '',
			error: false,
		}
	}

	handleChange(event) {
		const {value} = event.target;

		this.setState({
			taskDescription: value,
			error: false
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const {taskDescription} = this.state;

		console.log(taskDescription);
	}

	render() {

		const {taskDescription: description, error} = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<div className='add-task'>
					<input
						className={error ? 'empty' : ''}
						type='text'
						placeholder='Task description goes here'
						value={description}
						onChange={this.handleChange}
					/>
					<button className='btn btn-add'>
						<i className="fas fa-plus"></i>
					</button>
				</div>
				{error &&
					<div className='alert'>Task description must not be empty</div>
				}
			</form>
		);
	}
}

export default AddTask;
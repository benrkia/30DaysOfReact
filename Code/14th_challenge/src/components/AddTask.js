import React, { Component } from 'react';

import Task from '../classes/Task';

class AddTask extends Component {

	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addTask = this.addTask.bind(this);

		this.state = {
			taskDescription: '',
			error: false,
		}
	}

	componentWillReceiveProps(nextProps) {
		const {update} = nextProps;

		if(update.active) {
			this.setState({
				taskDescription: update.task.description,
				error: false,
			});
		}
	}

	handleChange(event) {
		const {value} = event.target;

		this.setState({
			taskDescription: value,
			error: false
		});
	}

	addTask(description) {
		const task = new Task(description);

		this.props.addTask(task);
	}

	handleSubmit(event) {
		event.preventDefault();

		const {update} = this.props;
		const {taskDescription} = this.state;

		if(!taskDescription) {
			this.setState({error: true});
			return;
		}

		if(update.active) {
			this.props.updateTask(update.task.id, taskDescription);
		}else {
			this.addTask(taskDescription);
		}

		this.setState({taskDescription: ''});
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
					<div className='empty-alert'>Task description must not be empty</div>
				}
			</form>
		);
	}
}

export default AddTask;
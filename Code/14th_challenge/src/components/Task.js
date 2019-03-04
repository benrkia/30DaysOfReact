import React, { Component } from 'react';

class Task extends Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {

	}

	render() {

		const {task} = this.props;

		return (
			<div className='task'>
				<label className="checkbox-container completed">
					<input type="checkbox" checked={task.completed} onChange={this.handleChange} />
					<span className="checkmark"></span>
				</label>
				<p className={'task-description ' + (task.completed ? 'completed' : '')}>{task.description}</p>
				<div className='control'>
					<button className='btn btn-delete'>
						<i className="fas fa-trash-alt"></i>
					</button>
					<button className='btn btn-edit'>
						<i className="fas fa-pencil-alt"></i>
					</button>
				</div>
			</div>
		);
	}
}

export default Task;
import React from 'react';

const TaskComponent = (props) => {

	const {task} = props;

	const handleChange = (event) => {
		const {checked} = event.target;
		const {id} = props.task;
		props.toggleTask(id, checked);
	}

	const deleteTask = (id) => {
		if(window.confirm('are you sure you want to delete this task??')) {
			props.deleteTask(id);
		}
	}

	const editTask = (task) => {
		if(window.confirm('are you sure you want to edit this task??')) {
			props.editTask(task);
		}
	}

	return (
		<div className='task'>
			<label className="checkbox-container completed">
				<input type="checkbox" checked={task.completed} onChange={handleChange} />
				<span className="checkmark"></span>
			</label>
			<div className='content'>
				<p className={'task-description ' + (task.completed ? 'completed' : '')}>{task.description}</p>
				<span>
					{task.created_at.toDateString()}
				</span>
			</div>
			<div className='control'>
				<button className='btn btn-delete' onClick={() => deleteTask(task.id)}>
					<i className="fas fa-trash-alt"></i>
				</button>
				<button className='btn btn-edit' onClick={() => editTask(task)}>
					<i className="fas fa-pencil-alt"></i>
				</button>
			</div>
		</div>
	);
}

export default TaskComponent;
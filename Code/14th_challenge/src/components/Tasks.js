import React from 'react';

import TaskComponent from './TaskComponent'

const Tasks = (props) => {

	const {tasks, deleteTask, editTask, toggleTask, alert} = props;

	return (
		<div className='tasks'>
			{!tasks.length ?
				<h3 style={{color: 'red'}}>There is no tasks</h3>
				:
				tasks.map(task => {
					return <TaskComponent 
								key={task.id}
								task={task}
								deleteTask={deleteTask}
								editTask={editTask}
								toggleTask={toggleTask}
								alert={alert} />
				})
			}
		</div>
	);
}

export default Tasks;
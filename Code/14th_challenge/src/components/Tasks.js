import React, { Component } from 'react';

import Task from './Task'

const globalTasks = [
	{
		id: 1,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error cumque nesciunt fugiat, soluta, inventore voluptatem provident expedita quia laudantium voluptate quaerat rerum quo iusto doloremque tempore est, ea rem.',
		completed: false,
		created_at: new Date(),
	},
	{
		id: 2,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error cumque nesciunt fugiat, soluta, inventore voluptatem provident expedita quia laudantium voluptate quaerat rerum quo iusto doloremque tempore est, ea rem.',
		completed: true,
		created_at: new Date(),
	},
	{
		id: 3,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error cumque nesciunt fugiat, soluta, inventore voluptatem provident expedita quia laudantium voluptate quaerat rerum quo iusto doloremque tempore est, ea rem.',
		completed: false,
		created_at: new Date(),
	},
	{
		id: 4,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error cumque nesciunt fugiat, soluta, inventore voluptatem provident expedita quia laudantium voluptate quaerat rerum quo iusto doloremque tempore est, ea rem.',
		completed: true,
		created_at: new Date(),
	},
	{
		id: 5,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error cumque nesciunt fugiat, soluta, inventore voluptatem provident expedita quia laudantium voluptate quaerat rerum quo iusto doloremque tempore est, ea rem.',
		completed: false,
		created_at: new Date(),
	},
];

class Tasks extends Component {


	constructor(props){
		super(props);

		this.state = {
			tasks: globalTasks,
		}
	}

	render() {

		const {tasks} = this.state;

		return (
			<div className='tasks'>
				{
					tasks.map(task => <Task key={task.id} task={task} />)
				}
			</div>
		);
	}
}

export default Tasks;
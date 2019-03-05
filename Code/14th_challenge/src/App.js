import React, { Component } from 'react';

import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import './App.css'

import tasks from './data/tasks';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tasks,
			update: {
				active: false,
				task: null,
			},
			alert: {
				active: false,
				message: '',
				type: '',
			}
		}
	}

	addTask = (task) => {
		const {tasks} = this.state;
		tasks.push(task);
		this.setState({tasks});

		this.alert('Task has been created successfully', 'success');
	}

	deleteTask = (id) => {
		const tasks = this.state.tasks.filter(task => task.id !== id);
		this.setState({tasks});

		this.alert('Task has been deleted successfully', 'success');
	}

	updateTask = (id, newDescription) => {
		const {tasks} = this.state;
		tasks.forEach(task => {
			if(task.id === id){
				task.description = newDescription;
			}
		});

		this.setState({tasks});

		this.alert('Task has been updated successfully', 'success');
		this.clearUpdate();
	}

	editTask = (task) => {
		const {update} = this.state;
		update.active = true;
		update.task = task;
		this.setState({update});
	}

	clearUpdate = () => {
		const update = {
			active: false,
			task: null,
		};

		this.setState({update});
	}
	
	toggleTask = (id, is_completed) => {
		const {tasks} = this.state;
		tasks.forEach(task => {
			if(task.id === id){
				task.completed = is_completed;
			}
		});

		this.setState({tasks});
	}

	render() {

		let {tasks, update, alert} = this.state;
		const completedTasks = tasks.filter(task => task.completed);
		const uncompletedTasks = tasks.filter(task => !task.completed);

		return (
			<div>
				{alert.active &&
					<div className={`alert alert-${alert.type}`}>{alert.message}</div>
				}
				<Header />
				<AddTask 
					addTask={this.addTask}
					updateTask={this.updateTask}
					update={update} />
				<Tasks	
					tasks={uncompletedTasks}
					deleteTask={this.deleteTask}
					editTask={this.editTask}
					toggleTask={this.toggleTask} />
				{completedTasks.length ?
					<React.Fragment>
						<h2 className='separator-header'>Completed Tasks</h2>
						<Tasks	
							tasks={completedTasks}
							deleteTask={this.deleteTask}
							editTask={this.editTask}
							toggleTask={this.toggleTask} />
					</React.Fragment>
					:
					''	
				}
			</div>
		);
	}

	clearAlert = () => {
		const alert = {
			message: '',
			type: '',
			active: false,
		};
		this.setState({alert});
	}

	alert = (message, type) => {
		const {alert} = this.state;
		alert.message = message;
		alert.type = type;
		alert.active = true;
		this.setState({alert});
		setTimeout(this.clearAlert, 2000);
	}
}

export default App;
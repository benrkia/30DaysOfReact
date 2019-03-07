import React, { Component } from 'react';

import { taskService } from './services/task.service';

import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import './App.css'

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			tasks: [],
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

	componentDidMount() {

		this.setState({loading: true});

		taskService.getTasks()
		.then(tasks => {
			this.setState({tasks, loading: false});
		})
		.catch(response => {
			this.alert(response.error, 'danger');
		});

	}

	addTask = (task) => {

		const {tasks} = this.state;

		taskService.addTask(task)
		.then(task => {
			tasks.push(task);
			this.setState({tasks});

			this.alert('Task has been created successfully', 'success');
		})
		.catch(response => {
			this.alert(response.error, 'danger');
		});
	}

	deleteTask = (id) => {

		taskService.deleteTask(id)
		.then(() => {
			const tasks = this.state.tasks.filter(task => task.id !== id);
			this.setState({tasks});

			this.alert('Task has been deleted successfully', 'success');
		})
		.catch(response => {
			this.alert(response.error, 'danger');
		});

	}

	updateTask = (id, newDescription) => {
		const {tasks} = this.state;

		const task = tasks.find(task => task.id === id);

		taskService.updateTask(id, {title: newDescription})
		.then(() => {
			this.clearUpdate();

			task.description = newDescription;
			this.setState({tasks});

			this.alert('Task has been updated successfully', 'success');
		})
		.catch(response => {
			this.alert(response.error, 'danger');
		});
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

		const task = tasks.find(task => task.id === id);
		task.completed = is_completed;
		this.setState({tasks});

		this.alert(`Task has been marked as ${is_completed ? 'completed' : 'uncompleted'} successfully`, 'success');

	}

	render() {

		let {tasks, loading, update, alert} = this.state;
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
				{loading ?
					<h2 style={{padding: '20px',display: 'grid',justifyItems: 'center'}}>
						Loading ...
					</h2>
					:
					<React.Fragment>
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
					</React.Fragment>
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
import { Header, handleResponse } from '../helpers/Helper';

import Task from '../classes/Task'

const { REACT_APP_API_URL: API_URL } = process.env;

export const taskService = {
    addTask,
    updateTask,
    deleteTask,
    getTasks,
};

/**
 * @param task 
 * add new task
*/
function addTask(task) {

    const { description, completed } = task;

    const requestOptions = {
        method: 'POST',
        headers: Header(),
        body: JSON.stringify({ title: description, completed })
    };

    return fetch(`${API_URL}/todos`, requestOptions)
        .then(handleResponse)
        .then(() => task);
}

/**
 * @param newTaskData
 * update an existing task
*/
function updateTask(id, newTaskData) {

    const requestOptions = {
        method: 'PUT',
        headers: Header(),
        body: JSON.stringify(newTaskData)
    };

    return fetch(`${API_URL}/todos/${id}`, requestOptions)
        .then(handleResponse);
}

/**
 * @param id 
 * delete an existing task
*/
function deleteTask(id) {

    const requestOptions = {
        method: 'DELETE',
        headers: Header()
    };

    return fetch(`${API_URL}/todos/${id}`, requestOptions)
        .then(handleResponse);
}


// Fetch the tasks from the api
function getTasks() {
    const requestOptions = {
        method: 'GET',
        headers: Header()
    };

    return fetch(`${API_URL}/todos`, requestOptions)
    .then(handleResponse)
    .then(response => {
        const tasks = [];
        let i = 1;
        for(let todo of response) {
            const task = new Task(todo.title, todo.completed, todo.id);
            tasks.push(task);
            
            if(i++ === 20) break;
        }

        return tasks;

    });
}
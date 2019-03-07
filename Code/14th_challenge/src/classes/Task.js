let uniqid = require('uniqid')

class Task {

    constructor(description, completed = false, id = uniqid()) {
        this.id = id;
        this.description = description;
        this.created_at = new Date();
        this.completed = completed;
    }
}

export default Task;
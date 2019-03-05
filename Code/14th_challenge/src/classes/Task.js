let uniqid = require('uniqid')

class Task {

    constructor(description) {
        this.id = uniqid();
        this.description = description;
        this.created_at = new Date();
        this.completed = false;
    }
}

export default Task;
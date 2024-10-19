// components/Task.js

export class Task {
    constructor(id, title, description, status = 'pending') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

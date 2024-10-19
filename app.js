// app.js

import { addTask, renderTasks } from './components/TaskList.js';
import { showNotification } from './components/Notification.js';

document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    const title = document.getElementById('taskTitle').value.trim(); // Trim whitespace
    const description = document.getElementById('taskDescription').value.trim(); // Trim whitespace

    // Input validation
    if (!title || !description) {
        showNotification('Please enter both title and description.'); // Show notification if inputs are empty
        return;
    }

    addTask(title, description); // Add a new task
    this.reset(); // Clear the form inputs
});

// Initial render call if needed
renderTasks();

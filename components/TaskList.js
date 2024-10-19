// components/TaskList.js

import { Task } from './Task.js';
import { showNotification } from './Notification.js';
import { displayTaskDetails, clearTaskDetails } from './TaskDetails.js';

let tasks = [];
let taskIdCounter = 1; // Counter for unique task IDs

// Function to add a new task
export function addTask(title, description) {
    const newTask = new Task(taskIdCounter++, title, description); // Increment taskIdCounter
    tasks.push(newTask);
    showNotification('Task added!'); // Show notification for task added
    renderTasks(); // Re-render the task list
}

// Function to render the tasks in the table
export function renderTasks() {
    const taskTableBody = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    taskTableBody.innerHTML = ''; // Clear the table body

    tasks.forEach((task, index) => {
        const row = taskTableBody.insertRow();

        // Title Cell
        const titleCell = row.insertCell(0);
        titleCell.innerText = task.title;

        // Add click event to the title cell to view task details
        titleCell.style.cursor = 'pointer'; // Change cursor to pointer
        titleCell.onclick = () => {
            displayTaskDetails(task); // Show task details in the details section
        };

        // Description Cell
        const descriptionCell = row.insertCell(1);
        descriptionCell.innerText = task.description;

        // Status Cell
        const statusCell = row.insertCell(2);
        const statusSelect = document.createElement('select');

        const statusOptions = ['pending', 'in progress', 'completed'];
        statusOptions.forEach(status => {
            const option = document.createElement('option');
            option.value = status;
            option.text = status.charAt(0).toUpperCase() + status.slice(1); // Capitalize first letter
            if (status === task.status) {
                option.selected = true; // Set selected option based on task status
            }
            statusSelect.appendChild(option);
        });

        // Update task status on change
        statusSelect.addEventListener('change', () => {
            task.status = statusSelect.value; // Update the task's status
        });

        statusCell.appendChild(statusSelect); // Add dropdown to the cell

        // Actions Cell
        const actionsCell = row.insertCell(3);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => {
            if (confirm('Are you sure you want to delete this task?')) {
                deleteTask(index); // Delete task on button click
            }
        };

        actionsCell.appendChild(deleteButton); // Add delete button to the cell
    });
}

// Function to delete a task
export function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from tasks array
    showNotification('Task deleted!'); // Show notification for task deletion
    renderTasks(); // Re-render the task list
    clearTaskDetails(); // Clear the task details section
}

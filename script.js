// Task Constructor
class Task {
    constructor(id, title, description, status = 'pending') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

let tasks = [];
let taskIdCounter = 1; // Counter for unique task IDs

// Event listener for the form submission
document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    const title = document.getElementById('taskTitle').value.trim(); // Trim whitespace
    const description = document.getElementById('taskDescription').value.trim(); // Trim whitespace

    // Input validation
    if (!title || !description) {
        showNotification('Please enter both title and description.'); // Show notification if inputs are empty
        return;
    }

    // Add a new task
    const newTask = new Task(taskIdCounter++, title, description); // Increment taskIdCounter
    tasks.push(newTask);
    showNotification('Task added!'); // Show notification for task added

    renderTasks(); // Re-render the task list
    this.reset(); // Clear the form inputs
});

// Render the tasks in the table
function renderTasks() {
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

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to display task details
function displayTaskDetails(task) {
    const detailsSection = document.getElementById('taskDetails');
    detailsSection.innerHTML = `
        <h2>Task Details</h2>
        <p><strong>Title:</strong> ${task.title}</p>
        <p><strong>Description:</strong> ${task.description}</p>
        <p><strong>Status:</strong> ${task.status.charAt(0).toUpperCase() + task.status.slice(1)}</p>
    `;
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from tasks array
    showNotification('Task deleted!'); // Show notification for task deletion
    renderTasks(); // Re-render the task list
    clearTaskDetails(); // Clear the task details section
}

// Function to clear task details
function clearTaskDetails() {
    const detailsSection = document.getElementById('taskDetails');
    detailsSection.innerHTML = `
        <h2>Task Details</h2>
        <p>Select a task to see its details.</p>
    `;
}

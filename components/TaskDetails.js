// components/TaskDetails.js

// Function to display task details
export function displayTaskDetails(task) {
    const detailsSection = document.getElementById('taskDetails');
    detailsSection.innerHTML = `
        <h2>Task Details</h2>
        <p><strong>Title:</strong> ${task.title}</p>
        <p><strong>Description:</strong> ${task.description}</p>
        <p><strong>Status:</strong> ${task.status.charAt(0).toUpperCase() + task.status.slice(1)}</p>
    `;
}

// Function to clear task details
export function clearTaskDetails() {
    const detailsSection = document.getElementById('taskDetails');
    detailsSection.innerHTML = `
        <h2>Task Details</h2>
        <p>Select a task to see its details.</p>
    `;
}

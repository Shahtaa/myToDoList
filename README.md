# Task Management App

## Overview

This is a simple task management application that allows users to efficiently add, view, update, and delete tasks. It provides a user-friendly interface for managing tasks seamlessly.

## Features

- **Task Management**: Add, view, update, and delete tasks.
- **Task Details**: Display task details upon selection.
- **Status Updates**: Edit the status of tasks (Pending, In Progress, Completed).
- **User Notifications**: Receive notifications for actions like task addition or deletion.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling the application.
- **JavaScript**: For app functionality and interactivity.
- **ES Modules**: For modular JavaScript code organization.

## Getting Started

### Prerequisites

- **Visual Studio Code**: Ensure you have VS Code installed.
- **Live Server Extension**: Install the Live Server extension to view the app in your browser.

### How to Start the App with Live Server

1. **Install Live Server**:

   - Open Visual Studio Code.
   - Go to the Extensions view (`Ctrl+Shift+X`).
   - Search for "Live Server" and click on "Install" next to the extension by Ritwick Dey.

2. **Open Your Project**:

   - Select **File** > **Open Folder...** and open the folder containing the `index.html` file.

3. **Start Live Server**:

   - Click on `index.html` in the Explorer view.
   - Right-click on the `index.html` file and select **"Open with Live Server"**.
   - Alternatively, click the **Go Live button** in the bottom right corner of VS Code.

4. **View Your App**:
   - Your default web browser will open and display the Task Management App.
   - Any code changes will automatically refresh in the browser.

## Method Descriptions

### Core Functions

- **`addTask(title, description)`**: Adds a new task with the provided title and description to the task list.
- **`renderTasks()`**: Renders the current list of tasks in a table format.
- **`deleteTask(index)`**: Deletes the task at the specified index from the task list.

### Utility Functions

- **`showNotification(message)`**: Displays a notification with the provided message.
- **`displayTaskDetails(task)`**: Displays the details of the selected task.
- **`clearTaskDetails()`**: Clears the task details section, displaying a default message.

# React Task Management App

A simple task management application built with React, utilizing drag-and-drop functionality to manage tasks across different statuses: To Do, In Progress, and Completed.

## Features

- **Add Tasks**: You can add tasks using a modal form.
- **Drag-and-Drop**: Move tasks between "To Do", "In Progress", and "Completed" lists using drag-and-drop functionality.
- **Task Management**: Track and update the status of tasks as you work on them.

## Tech Stack

- **React**: Frontend library to build the user interface.
- **CSS**: Styling for the components.
- **HTML5 Drag-and-Drop API**: For task status updates with drag-and-drop (or you can optionally use `react-dnd` for more complex features).

## Installation

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd task-management-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

### Adding a Task

- Click on the **Add Task** button to open the modal.
- Enter the task title and submit it to add the task to the "To Do" list.

### Dragging Tasks

- Drag tasks from one column to another:
  - **To Do** -> **In Progress**
  - **In Progress** -> **Completed**
  - And vice versa.

### Moving Tasks

- You can also move tasks using the "▶" icon next to each task in the "To Do" and "In Progress" lists.

## Folder Structure

![image](https://github.com/user-attachments/assets/b789ed61-2ee4-428b-904d-6715745fa6e7)

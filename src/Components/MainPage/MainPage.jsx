import React, { useState } from 'react';
import TaskVisible from '../TaskVisible';
import ModalAddEdit from '../TaskModal/ModalAddEdit';
import './MainPage.css'; // Import the CSS file

const MainPage = () => {
    const [task, setTask] = useState(["first", "second"]);
    const [workingTask, setWorkingTask] = useState(["third", "fourth"]);
    const [completedTask, setCompletedTask] = useState(["last"]);

    const addTask = (information) => {
        setTask((prev) => [...prev, information.title]);
        console.log(information);
    };

    const handleDrop = (e, targetStatus) => {
        const taskTitle = e.dataTransfer.getData("taskTitle");

        // Remove task from its previous list
        let updatedTasks;
        if (task.includes(taskTitle)) {
            updatedTasks = task.filter(task => task !== taskTitle);
            setTask(updatedTasks);
        } else if (workingTask.includes(taskTitle)) {
            updatedTasks = workingTask.filter(task => task !== taskTitle);
            setWorkingTask(updatedTasks);
        } else if (completedTask.includes(taskTitle)) {
            updatedTasks = completedTask.filter(task => task !== taskTitle);
            setCompletedTask(updatedTasks);
        }

        // Add task to the target list
        if (targetStatus === 0) setTask(prev => [...prev, taskTitle]);
        else if (targetStatus === 1) setWorkingTask(prev => [...prev, taskTitle]);
        else if (targetStatus === 2) setCompletedTask(prev => [...prev, taskTitle]);
    };

    return (
        <div className="main-container">
            <ModalAddEdit addTask={addTask} />
            <div className="task-container">
                <div
                    className="task-box"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, 0)}
                >
                    <h2>To Do</h2>
                    <TaskVisible list={task} status={0} prevList={setTask} CurrentList={setWorkingTask} />
                </div>
                <div
                    className="task-box"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, 1)}
                >
                    <h2>In Progress</h2>
                    <TaskVisible list={workingTask} status={1} prevList={setWorkingTask} CurrentList={setCompletedTask} />
                </div>
                <div
                    className="task-box"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, 2)}
                >
                    <h2>Completed</h2>
                    <TaskVisible list={completedTask} status={2} />
                </div>
            </div>
        </div>
    );
};

export default MainPage;

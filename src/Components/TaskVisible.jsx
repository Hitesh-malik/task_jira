import React from 'react';

const TaskVisible = ({ list, status, prevList = () => { }, CurrentList = () => { } }) => {

  const handleDragStart = (e, taskTitle) => {
    e.dataTransfer.setData("taskTitle", taskTitle);
  };

  const shift = (status, information) => {
    console.log(status, information);

    // Shift the task to the next status
    prevList((prev) => {
      return prev.filter(item => item !== information);
    });
    CurrentList((prev) => [...prev, information]);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80 border border-gray-300">
      {list.map((information, index) => (
        <div
          key={index}
          className="bg-gray-100 p-2 my-2 rounded-md text-gray-700 flex items-center group"
          draggable
          onDragStart={(e) => handleDragStart(e, information)}
        >
          {information} 
          {status !== 2 && (
            <span className="mr-2 hidden group-hover:block" onClick={() => shift(status, information)}>▶</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskVisible;

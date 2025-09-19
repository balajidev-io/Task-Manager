import React from "react";
function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTask(task.id)}
        >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;

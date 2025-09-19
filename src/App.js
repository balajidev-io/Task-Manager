import React, { useState } from "react";
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Add Task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // all
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>

      {/* Task Form */}
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
            <button onClick={() => deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
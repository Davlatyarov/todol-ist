import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import { fetchTodos } from "../services/api";


function TodoList() {
  const [showInput, setShowInput] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // API
  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      const data = await fetchTodos();
      setTasks(data);
      setLoading(false);
    };
    loadTasks();
  }, []);

  // Add Task
  const addTask = (newTask) => {
    if (newTask) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        isCompleted: false,
      };
      setTasks((prevTasks) => [newTaskObj, ...prevTasks]);
    }
    setShowInput(false); // Закрываем форму
  };

  // Delete Task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Toggle Completion
  const toggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="taskdo-container">
      <h1>TaskDo</h1>
      {!showInput && !loading && (
        <a onClick={() => setShowInput(true)} className="add-task-button">
          <div className="add-task-container">
            <div className="plus-icon">+</div>
            <span className="add-task-text">Add New Task</span>
          </div>
        </a>
      )}
      {showInput && <TodoInput onAddTask={addTask} />}
      {loading && <p className="loadingText">Loading tasks...</p>}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <button
              onClick={() => deleteTask(task.id)}
              className="task-delete"
            >
              🗑️
            </button>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleCompletion(task.id)}
              className={`task-checkbox ${task.isCompleted ? "completed" : ""}`}
            />
            <span
              className={`task-text ${task.isCompleted ? "completed" : ""}`}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

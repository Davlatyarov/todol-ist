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
      const data = await fetchTodos(); // fetchTodos ni api.js dan chaqirish.
      setTasks(data);
      setLoading(false);
    };

    loadTasks(); // Funksiyani chaqirish.
  }, []);

// Add Task
  const addTask = (newTask) => {
    const newTaskObj = {
      id: Date.now(), //unique id berish.
      text: newTask,
      isCompleted: false,
    };
    setTasks((prevTasks) => [newTaskObj, ...prevTasks]);
    setShowInput(false);
  };

// Delete Task 
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

//Is Complated
  const toggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  //Cancel 
  const cancelAddTask = () => {
    setShowInput(false);
  };

  return (
    <div class="taskdo-container">
      <h1>TaskDo</h1>
      {!showInput && !loading && (
        <a onClick={() => setShowInput(true)} class="add-task-button">
          <div class="add-task-container">
            <div class="plus-icon">+</div>
            <span class="add-task-text">Add New Task</span>
          </div>
        </a>
      )}
      {showInput && <TodoInput onAddTask={addTask} onCancel={cancelAddTask} />}
      {loading && <p class="loadingText">Loading tasks...</p>}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
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

            <button onClick={() => deleteTask(task.id)} class="task-delete">
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

import React, { useState } from "react";

// Add task
function TodoInput({ onAddTask, onCancel }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          style={{
            backgroundColor: "white",
            color: "#524f4f",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            border: "1px solid #ccc",
          }}
        />
        <button class="button-37" role="button">
          Add Task
        </button>

        <button class="button-38" onClick={onCancel} role="button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default TodoInput;

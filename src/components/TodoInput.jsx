import React, { useState, useRef, useEffect } from "react";


function TodoInput({ onAddTask }) {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  const handleBlur = () => {
    if (!task.trim()) {
      onAddTask(null); // Закрывает форму при пустом значении
    }
  };

  useEffect(() => {
    inputRef.current.focus(); // Автофокус на инпут
  }, []);

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        ref={inputRef}
        onBlur={handleBlur}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task..."
        className="task-input"
      />
      <button type="submit" className="add-task-btn">
        Done
      </button>
    </form>
  );
}

export default TodoInput;

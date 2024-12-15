import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [showTodo, setShowTodo] = useState(false); // Управление отображением TodoList

  return (
    <div>
      {/* Если showTodo === false, показываем Header */}
      {!showTodo && <Header onStart={() => setShowTodo(true)} />}

      {/* Если showTodo === true, показываем TodoList */}
      {showTodo && <TodoList />}
    </div>
  );
}

export default App;

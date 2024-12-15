// services/api.js

export const fetchTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }
    const data = await response.json();
    return data.map((task) => ({
      id: task.id,
      text: task.title,
      isCompleted: task.completed,
    }));
  } catch (error) {
    console.error("Ошибка при вызове API:", error);
    return [];
  }
};

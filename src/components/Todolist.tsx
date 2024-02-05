import React, { useState } from "react";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const Todolist = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: "Wash the dishes", completed: false },
    { id: 2, text: "Take the bins out", completed: false },
    { id: 3, text: "Wash clothes", completed: false },
  ]);
  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: TodoItem = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add an item to do!" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

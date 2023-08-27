"use client";

import { useState } from "react";

export default function Todos() {
  const [todosList, setTodosList] = useState([]);
  const [todo, setTodo] = useState("");
  const handleTodo = (evt) => {
    const value = evt.target?.value;
    setTodo(value);
  };
  const addTodo = (evt) => {
    evt.preventDefault();
    if (todo.trim().length > 1) {
      setTodosList((data) => [
        ...data,
        { id: todosList.length + 1, title: todo, completed: false },
      ]);
      setTodo("");
    }
  };
  const handleCheck = (value) => {
    const todo = todosList.find((t) => t.id == value);
    if (todo) {
      const todos = todosList.map((d) => {
        if (d.id === todo.id) {
          d.completed = !d.completed;
        }
        return d;
      });

      setTodosList(todos);
    }
  };
  const deleteTodo = (value) => {
    const todos = todosList.filter((t) => t.id !== value);
    setTodosList(todos);
  };
  return (
    <div className="container mt-5">
      <form className="join" onSubmit={addTodo}>
        <input
          type="text"
          value={todo}
          onChange={handleTodo}
          className="input join-item input-bordered"
          name="newTodo"
          placeholder="Entrer une nouvelle todo list"
        />
        <button className="btn btn-secondary join-item">Add todo</button>
      </form>
      {todosList.length > 0 && (
        <ul className="w-56 bg-base-200 rounded-box">
          {todosList.map((todo) => (
            <li key={todo.id}>
              <div className="flex flex-row form-control items-items-center">
                <button
                  className="p-1 text-white bg-red-500 rounded"
                  onClick={() => deleteTodo(todo.id)}
                >
                  X
                </button>
                <label htmlFor={todo.id} className="cursor-pointer label">
                  <span className="label-text">{todo.title}</span>
                  <input
                    id={todo.id}
                    onChange={() => handleCheck(todo.id)}
                    type="checkbox"
                    checked={todo.completed}
                    className="checkbox"
                  />
                </label>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

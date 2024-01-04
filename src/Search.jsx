/* eslint-disable react/jsx-key */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import List from './List';
import icon from "./assets/icon.png";

export default function Search() {
  let [todoList, SetTodoList] = useState([
    {
      task: "",
      id: uuidv4(),
      isDone: false,
    },
  ]);
  let [todo, SetTodo] = useState("");

  let addTask = () => {
    SetTodoList((prevTodo) => {
      return [...prevTodo, { task: todo, id: uuidv4(), isDone: false }];
    });
    SetTodo("");
  };

  let deleteTask = (id) => {
    SetTodoList((prevTodo) => {
      return prevTodo.filter((t) => t.id != id);
    });
  };

  return (
    <>
      <div className="container">
        <div className="todo-app">
          <h2>
            To-Do list
            <img src={icon} alt="iconImg" />
          </h2>
          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="Enter your task"
              value={todo}
              onChange={(event) => {
                SetTodo(event.target.value);
              }}
            />
            <button onClick={addTask}>Add</button>
          </div>
          <ul id="list-container">
            {todoList.map((t) => (
              <li key={t.id}>
                {t.task} &nbsp; &nbsp; &nbsp; &nbsp;
                <span className="spacialChar" onClick={() => deleteTask(t.id)}>
                  {"\u00d7"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

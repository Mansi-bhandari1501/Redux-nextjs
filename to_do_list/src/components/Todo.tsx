"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";

// import {addTodo} from "@/feature/todo/todo.slice"
import { createTodo,deleteTodo, getTodos } from "@/feature/todo/todo.Action";
import { TodoType } from "@/feature/todo/todo.slice";
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/store/hooks'
const Todo = () => {
  const store = useAppStore()
  const initialized = useRef(false)
  if (!initialized.current) {
    store.dispatch(getTodos())
    console.log('store: ', store);
    
    initialized.current = true
  }
  // const name = useAppSelector((state) => state.product.name)
  const dispatch = useAppDispatch()
  const [todoName, setTodoName] = useState<string>("");
 

  const Todos = useAppSelector((state) => state.todo.todos);
  console.log('Todos: ', Todos);

  const addTodos = async() => {
    const res = await dispatch(createTodo(todoName))
    setTodoName("")
  };

  const deleteTodos = async(_id: string) => {
    
    const res = await dispatch(deleteTodo(_id))
   
  };

  const checkTodo = async(_id: string) => {
   
    console.log("checked")
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-col space-y-10">
      <div className="p-4 flex flex-col space-y-2 text-black">
        <textarea
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="p-4 rounded border border-solid border-gray-800"
        />
        <button
          className="p-4 ml-4 bg-violet-700 rounded hover:bg-violet-900 text-white font-bold"
          onClick={addTodos}
        >
          Add Todo
        </button>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        {Todos.map((todo:TodoType) => {
          return (
            <div key={todo._id} className="flex justify-between items-center w-1/3 my-2 bg-gray-600 p-4 bg-opacity-30 border border-solid border-gray-800 rounded">
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => {
                    checkTodo(todo?._id);
                  }}
                  className="h-6 w-6"
                />
                <div
                  className={`text-xl font-semibold ml-2 text-white ${
                    todo.status ? "line-through" : ""
                  }`}
                >
                  {todo?.todos}
                </div>
              </div>
              <button
                onClick={() => {
                  deleteTodos(todo?._id);
                }}
                className="bg-red-600 p-2 rounded hover:bg-red-800 text-white font-bold"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
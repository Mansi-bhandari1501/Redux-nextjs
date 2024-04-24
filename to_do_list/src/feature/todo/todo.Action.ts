import { createAsyncThunk } from "@reduxjs/toolkit";
// import { register,login} from "../../services/auth.service";
import { ACTION_TYPE } from "./todo.ActionType";

import axios from 'axios'
import { createTodos,deleteTodos } from "@/services/todos.service";
export const  createTodo = createAsyncThunk(
ACTION_TYPE.ADD_TODO,
  async (todos:string) => {
    console.log("service data",todos)
    try {
      const res = await createTodos({todos})
      console.log(res,"resulttt")
      return res
    } catch (error) {
        throw error
    }
  }
);
export const deleteTodo = createAsyncThunk(
 ACTION_TYPE.DELETE_TODO,
  async (_id:string, { rejectWithValue }) => {
    console.log('_id: ', _id);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res= await axios.delete(`/api/deleteTodos/${_id}`)
      // const res = await deleteTodos({_id})
      console.log("action res", res);
      return res;
    } catch (error) {
        throw error
    }
  }
);
export const checkTodo = createAsyncThunk(
 ACTION_TYPE.DELETE_TODO,
  async (_id:string, { rejectWithValue }) => {
    console.log('_id: ', _id);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res= await axios.put(`/api/deleteTodos/${_id}`)
      // const res = await deleteTodos({_id})
      console.log("action res", res);
      return res;
    } catch (error) {
        throw error
    }
  }
);
export const getTodos = createAsyncThunk(
 ACTION_TYPE.DELETE_TODO,
  async ( ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res= await axios.get(`/api/getTodos`)
      // const res = await deleteTodos({_id})
      console.log("action res", res);
      return res;
    } catch (error) {
        throw error
    }
  }
);


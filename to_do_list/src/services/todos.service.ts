import axios from 'axios'

export const BASE_URL = 'http://localhost:3000'
console.log(BASE_URL)
export const axiosApi =  axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

const PATHS = {
  addTodos: "/api/addTodos",
  deleteTodos: "/api/deleteTodos"
};

export const createTodos = async (payload:any) => await axiosApi.post(PATHS.addTodos, payload);
export const deleteTodos = async (payload:any) => await axiosApi.delete(PATHS.deleteTodos, payload);
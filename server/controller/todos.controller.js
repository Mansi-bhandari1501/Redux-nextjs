import errorHandler from "../lib/utils.js";
import todoService from "../service/todo.service.js";


export const newTodo = async (req, res) => {
    try {
      const response = await todoService.addTodos(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };

export const getAllTodo = async (req, res) => {
    try {
      const response = await todoService.fetchAllTodos(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };

export const removeTodo = async (req, res) => {
    try {
      const response = await todoService.deleteTodo(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const updateTodoDetails = async (req, res) => {
    try {
      const response = await todoService.updateTodo(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };


export const updateTodoStatus = async (req, res) => {
    try {
      const response = await todoService.updateStatusTodo(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };



 

  export default{
    // findBook,
    newTodo,
    getAllTodo,
    removeTodo,
    updateTodoDetails,
    updateTodoStatus,
    
  }
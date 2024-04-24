import express  from "express";
import { todosController } from '../controller/index.js';

const {   newTodo,
  getAllTodo,
  removeTodo,
  updateTodoDetails,
  updateTodoStatus,} = todosController;
const router = express.Router()


router.post('/',newTodo);
 router.get('/',getAllTodo);
 router.delete('/:_id',removeTodo);
 router.put('/title/:_id', updateTodoDetails);
 router.put('/status/:_id', updateTodoStatus);
 
 export default router;

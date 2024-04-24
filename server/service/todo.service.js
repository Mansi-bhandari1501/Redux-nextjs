
import todoModel from "../models/todos.model.js";

export const addTodos = async (payload) => {
    try {
      //   const {receiverId} = payload.params
      const { todos } = payload.body;
  
      console.log("TODOS", payload.body);
  
  
      // if (!title  ) {
      //   throw Object.assign(new Error(), {
      //     name: "BAD_REQUEST",
      //     message: "Please enter Todo Title ",
      //   });
      // }
  
      const newTodo = await new todoModel({
        todos: todos,
      }).save();
  
      console.log(newTodo);
      return newTodo;
    } catch (error) {
      console.log(error)
      throw error;
    }
  };

  export const fetchAllTodos = async (payload) => {
    console.log(payload.body)
    const todos = await todoModel.find();
    return { todos };
  }

export const deleteTodo = async (payload) => {
    try {
      const { _id } = payload.params;
      console.log(payload.params)
      let data = await todoModel.findByIdAndDelete(_id);
      console.log('data: ', data);
  
      return { data };
    } catch (error) {
      throw error;
    }
  };
  export const updateTodo = async (payload) => {
    try {
        console.log(payload.params)
        console.log(payload.body)
      let data = await todoModel.findByIdAndUpdate(payload.params, {
        $set: payload.body,
      })
      console.log(data)
      return { data };
    } catch (error) {
      throw error;
    }
  };

 
  
   
  export const updateStatusTodo = async (payload) => {
    try {
      const { _id,status } = payload.body;
      // const user = payload.user._id
      // console.log(user)
      // console.log("connection object", user);

      if (!_id  ) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Please provide the all fields ",
        });
      }
      const data = await activityModel.findOneAndUpdate(
        {
          _id: _id,
        },
        {
          $set: { status: status },
        }
      );
  
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };
  


export default {
     addTodos,
    fetchAllTodos,
    deleteTodo,
    updateTodo,
    updateStatusTodo
  
    
  };
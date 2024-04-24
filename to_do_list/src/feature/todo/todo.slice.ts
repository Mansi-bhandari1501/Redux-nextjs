import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { createTodo, deleteTodo } from './todo.Action'

export interface TodoType {
  _id: string
  todos: string
  status: boolean
}

type initialStateProps = {
  loading: Boolean,
  error: any | undefined,
  success: Boolean,
  todos: TodoType[]
}

const todoinitalState:initialStateProps = {
    loading: false,
    todos: [],
    error: null,
    success: false,
  };

const todosSlice = createSlice({
  name: "todo",
  initialState: todoinitalState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos=[action.payload]
    }
  },
  extraReducers: (builder) => {
    //register user
    builder.addCase(createTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTodo.fulfilled, (state:initialStateProps, action) => {
      state.loading = false;
    console.log(action.payload,"ACTION")
      const data: TodoType  = action.payload.data.response 
      console.log('useSlice data', data)
        state.todos=[...state.todos,data]
        
            console.log( state.todos)
      state.loading = false;
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action;
    });
   

    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      const data: TodoType  = action?.payload.data.response.data._id
      console.log('useSlice data', data)

        const newTodo = state.todos.filter((item:TodoType) => {
             return item._id !== data
        })
        state.todos = newTodo
        console.log("NEWREQQQ",newTodo)
        console.log( state.todos);
        state.loading = false;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action;
    });

        }

  },
);

export default todosSlice.reducer;
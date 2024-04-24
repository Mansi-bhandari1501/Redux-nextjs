import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todos: {
        type: String,
        required: true,
        unique: true
    },
   
    status:{
        type:Boolean,
        // enum :["pending", "completed" ],
        default: false
    }

}, { timestamps: true })
const todoModel = mongoose.model('Todos', todoSchema);
export default todoModel;
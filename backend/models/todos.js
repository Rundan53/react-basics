const {Schema, model} = require('mongoose');


const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please Enter the Title"],
        trim: true
    },

    description: {
        type: String,
        required: [true, "Please enter the description"],
        trim: true
    },

    completed: {
        type: Boolean,
        default: false,
        required: false,
        
    }
})

const Todo = model('Todo', todoSchema);

module.exports = Todo;
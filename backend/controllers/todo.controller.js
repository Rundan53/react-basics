const Todo = require('../models/todos')
const {updateTodo, createTodo} = require('../validators/types')

const addTodo =async (req, res)=>{
 try{
    const {title, description, completed } = req.body;
    console.log({BODY:  req.body})
    const parsedpayload = createTodo.safeParse({title, description, completed});
    
    console.log(parsedpayload.error)
    if(!parsedpayload.success){
        return res.status(400).json({success: false, message: 'Invalid inputs', errors: parsedpayload.error.errors})
    }

    const response = await Todo.create({title, description, completed});
    res.status(201).json(response)

 }
 catch(error){
    console.error(error)
    res.status(500).json({error: {message: error.message || 'Internal Server Error'}})
 }
}


const updateCompletedStatus = async (req, res)=>{
 try{
    const {id} = req.params;
    const {} = req.body;
    const parsedpayload = updateTodo.safeParse({id});
    if(!parsedpayload.success){
        return res.status(400).json({success: false, message: "Invalid input"})
    }

    const response = await Todo.findByIdAndUpdate(id, {completed: true});
    
    res.status(201).json({success: true, message: "status updated successfully", response})

 }
 catch(error){
    console.error(error)
    res.status(500).json({error: {message: error.message || 'Internal Server Error'}})
 }
}

const getAllTodos = async (req, res)=>{
    const todos = await Todo.find();
    res.status(200).json(todos)
}


module.exports = {
    addTodo,
    updateCompletedStatus,
    getAllTodos
}
const {z} = require('zod');
const {isValidObjectId} = require('mongoose')

const createTodo = z.object({
    title: z
    .string()
    .trim()
    .min(1, "title is required"),

    description: z.string()
    .trim()
    .min(1, "description is mandatory"),

    completed: z.boolean().optional()
});


const updateTodo = z.object({
    id: z
    .string()
    .refine((value)=>{
        return isValidObjectId(value)
    }, {
        message: "Invalid todo Id"
    })
})


module.exports = {
    createTodo,
    updateTodo
}
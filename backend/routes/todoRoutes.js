const {Router} = require('express');
const router = Router();
const todoController = require('../controllers/todo.controller')

router.route('/:id')
.patch(todoController.updateCompletedStatus)


router
.route('/')
.post(todoController.addTodo)
.get(todoController.getAllTodos);

module.exports = router;
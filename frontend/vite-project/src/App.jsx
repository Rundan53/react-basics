import { useState } from 'react'
import {CreateTodo, addTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  console.log('>>>>>>>>control in APp')

  fetch('http://localhost:3000/todos')
  .then(async (res)=>{
    const json = await res.json();
    console.log(json)
    setTodos(json)
  })


  return (
     <div>
      <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
      </div>
  )
}

export default App

export function Todos({todos}){
    console.log(todos)
   if(todos.length > 0){
    return (
        todos.map((todo)=>{
            return (
                <div>
                    <h1 id= {todo._id}>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={(e)=>{
                        fetch(`http://localhost:3000/todo/${todo._id}`,{
                            method: "PATCH",
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                        .then((res)=>{
                            if(res.status===200 || res.status===201)
                            e.target.innerHTML = "Completed"
                        })
                    }}>{todo.completed === true ? 'Completed' : 'Mark as complete'}</button>
                </div>
            )
        })
    )
   }
}

import { useState } from "react"

export async function addTodo(title, description, setTodos, todos){

    console.log({title, description})

    fetch('http://localhost:3000/todo', {
        method: "POST",
        body:JSON.stringify( {
            title,
            description
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(async (res)=>{
        if(res.status===200 || res.status===201){
            const json = await res.json();
            console.log(json)
            setTodos([...todos, {title: json.title, description: json.description, completed: json.completed}])
        }
       
    })
}


export function CreateTodo({todos, setTodos}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div>
            <input style={{
                padding: 10,
                margin: 10
            }} 
            type="text" placeholder="title" 
            onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <br />
            <input style={{
                padding: 10,
                margin: 10
            }} 
            type="text" placeholder= "description" 
            onChange={(e)=>{
                setDescription(e.target.value)
            }}/>
             <br />

            <button onClick={()=>{
                addTodo(title, description, setTodos, todos)
            }}
             style={{
                padding: 10,
                margin: 10
            }}>
            Add Todo
            </button>
        </div>
    )
}



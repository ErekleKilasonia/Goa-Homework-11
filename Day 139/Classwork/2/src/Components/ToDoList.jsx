import { useState } from "react"

export default function ToDoList()
{
    const [ToDo,SetToDo] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const value = e.target.toadd.value
        SetToDo([...ToDo,value])
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="toadd"/>
                <button>add</button>
            </form>
            <ol>
                {ToDo.map((i,x)=>(
                    <li key={x}>{i}</li>
                ))}
            </ol>
        </div>
    )
}
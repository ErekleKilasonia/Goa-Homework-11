import { useState } from "react"
export default function Students()
{
    const [students, setStudents] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const student = e.target.studentInp.value
        setStudents([student,...students])

    }
    const handleClick = (e) =>{
        const list = [...students]
        list.splice(e,1)
        setStudents(list)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="studentInp" required/>
                <button>Add</button>
            </form>
            <ul>
                {students.map((i,x)=>(
                    <li key={i + x} onClick={()=>handleClick(x)}>{i}</li>
                ))}
            </ul>
        </div>
    )
}
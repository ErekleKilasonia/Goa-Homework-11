import { useState } from 'react'


function App() {
  const [arr,setArr] = useState([])

  function add(e)
  {
    e.preventDefault()
    const inp = e.target.task.value;
    setArr([...arr,inp])
  }
  return (
    <div>
      <form onSubmit={add}>
        <input type="text" name="task" placeholder="Enter your task"/>
        <button type="submit">add</button>
      </form>
      <ul>
        {arr.map((i,x)=>{
          return <li key={x}>{i}</li>
        })}
      </ul>
    </div>
  )
}

export default App

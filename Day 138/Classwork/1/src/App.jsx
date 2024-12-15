import { useState } from 'react'


function App() {
  const [counter,setCounter] = useState(0);

  function plus1()
  {
    setCounter(counter+1)
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={plus1}>add</button>
    </div>
  )
}

export default App

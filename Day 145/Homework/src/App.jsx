import { useState,useEffect } from 'react'


function App() {
  const [timer,setTimer] = useState("0");
  const [number,setNumber] = useState(0);
  useEffect(()=> {
    const hours = Math.floor(number / 3600);
    const minutes = Math.floor((number % 3600) / 60)
    const seconds = number % 60;
    setTimer(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
  },[number])


  
  function startTimer(e)
  {
    e.preventDefault();
    let time = e.target.time.value;
    setNumber(time)
    const int = setInterval(()=>{
      if(time > 0)
      {
        setNumber(--time)
      }
      else{
        clearInterval(int);
      }
    },1000)

  }
  return (
    <>
    <form onSubmit={startTimer}>
      <input type="number" name='time'/>
      <button>start</button>
    </form>
    <p>{timer}</p>
    </>
  )
}

export default App;

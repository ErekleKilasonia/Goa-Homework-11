import { useState,useEffect } from 'react'
import React from 'react'


function App() {
  const [heigth, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    })


  return (
    <>
      <div>
        <p>width:{heigth}</p>
        <p>heigth:{width}</p>
      </div>
    </>
  )
  
}

export default App

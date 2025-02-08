import { useState } from 'react'
import BookSearch from './Components/BookSearch'
import MyBooks from './Components/MyBooks'
import "./styles.css"
function App() {
  const [page,setPage] = useState(false)
  return(
    <div>
      <button className='navigator1' onClick={()=>setPage(!page)}>{page?"Book Search":"My Library"}</button>
      {page?<MyBooks/>:<BookSearch/>}
    </div>
  )
}

export default App

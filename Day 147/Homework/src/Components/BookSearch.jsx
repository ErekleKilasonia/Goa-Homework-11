import { useState } from "react"

export default function BookSearch()
{
    const [books,setBooks] = useState([])
    const [mybooks,setMybooks] = useState([])
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const book = e.target.book.value
        const api = `https://www.googleapis.com/books/v1/volumes?q=${book}`
        const data = await (await fetch(api)).json();
        
        const searchedBooks = data.items.map(i=>(
            {title:i.volumeInfo.title || "Title not found",thumbnail:i.volumeInfo.imageLinks?.thumbnail || "Thumbnail not found"}
        ))
        setBooks(searchedBooks)
    }
    const handleAdd = (book)=>{
        let x = JSON.parse(localStorage.getItem("Books")) || []
        const listn = [...x,book]
        localStorage.setItem("Books",JSON.stringify(listn))
        setMybooks(listn)

    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="book"/>
                <button>search</button>
            </form>
            <div className="books">
                {books.map(i=>(
                    <div key={i.title} className="book">
                        {i.thumbnail != "Thumbnail not found" ? <img src={i.thumbnail}/> : <p>Thumbnail not found</p>}
                        <p>{i.title}</p>
                        {(JSON.parse(localStorage.getItem("Books")) || []).findIndex((x)=>(x.title===i.title))!==-1?<button>already added</button>:<button onClick={() => handleAdd(i)}>Add</button>}
                    </div>
                ))}
            </div>
        </>
    )
}
export default function MyBooks()
{
    const x = JSON.parse(localStorage.getItem("Books")) || []
    return(
        <div className="books">
            {x.map(i=>(
                <div className="book" key={i.title}>
                    <img src={i.thumbnail} alt={i.thumbnail} />
                    <p>{i.title}</p>
                </div>
            ))}
        </div>
    )
}
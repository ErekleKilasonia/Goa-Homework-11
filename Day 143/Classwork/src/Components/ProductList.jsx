import { useEffect,useState } from "react";
export default function ProductList()
{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(api=>api.json()).then(res => setData(res))
    },[])

    return (
        <div>
            <ul>
                {data.map(i=>{
                    return <li key={i.id}>{i.title}</li>
                })}
            </ul>
        </div>
    )
}
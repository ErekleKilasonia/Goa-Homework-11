import { useEffect } from "react";
import { useState } from "react";

export default function Counter()
{
    const [count,setCount] = useState(0)

    useEffect(()=>console.log("counter plus one"),[count])
    return(
        <div>
            <p></p>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}
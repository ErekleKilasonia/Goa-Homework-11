import { useState } from "react";
function App() {
    const [inp, setInp] = useState('');

    const [arr, setArr] = useState([]);
    function addToList()
    {
        arr.push(inp);
        setArr(arr);
        setInp("");
    }
    return(
        <div>
            <input type="text" placeholder="Enter what you have to do" onChange={(i)=>(setInp(i.target.value))}/>
            <button onClick={addToList}>add</button>
            <ul>
                {arr.map((i)=>(
                    <li key={i}>{i}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;

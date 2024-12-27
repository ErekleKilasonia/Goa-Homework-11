import { useEffect, useState } from "react"

const ToDoList = () => {
    const [products,setProcust] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = e.target.prod.value;
        setProcust([...products,product])
        e.target.prod.value = ""
    }
    useEffect(() => {
        localStorage.setItem("products",products);

    },[products])
    const deletes = (index) => {
        const updateList = [...products];
        updateList.splice(index,1);
        setProcust(updateList);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="Product name: " name="prod"/>
                <button>Submit</button>
            </form> 

            <div>
                <ul>
                    {
                        products.map((item,index) => {
                            return <li key={index} onClick={()=>deletes(index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </>
        
        
    )
}

export default ToDoList
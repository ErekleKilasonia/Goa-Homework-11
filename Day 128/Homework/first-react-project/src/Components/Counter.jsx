const Counter = ()=>{
    let x = 0;
    const plusOne = ()=>{
        x++;
        console.log(x)
    }
    return(
        <button onClick={plusOne}>click me brother</button>
    )
}

export default Counter;
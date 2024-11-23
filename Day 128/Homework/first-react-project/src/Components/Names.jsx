const Names = ()=>{
    const names = ["erekle","anamaria","amiko"]
    return (
        <div>
            {names.map((i)=>{
                return <p key={i}>{i}</p>
            })}
        </div>
    )
}

export default Names;
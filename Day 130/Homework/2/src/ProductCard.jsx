export default function ProductCard({product,image})
{
    return(
        <div key={product + "Div"}>
            <h3 key={product + "Name"}>{product}</h3>
            <img key={image} src={image} alt={product} width="500px"/>
        </div>
    )
}
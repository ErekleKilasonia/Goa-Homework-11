import ProductCard from "./ProductCard";
export default function ProductList({products})
{
    return products.map((i)=>(<ProductCard product={i.product} image={i.image} key={i.product}/>));
}
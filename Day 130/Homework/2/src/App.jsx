import ProductList from "./ProductList";

function App() {
  const productsList = [{product:"Monitor",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1YzmVXmN1u6hVx__is5T2pq0B-tTICjacQ&s"},{product:"mouse",image:"https://m.media-amazon.com/images/I/61qN9d08hgL._AC_UF1000,1000_QL80_.jpg"}];
  return <ProductList products={productsList}/>
}

export default App

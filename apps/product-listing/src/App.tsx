import {useProducts} from "@nenoweb/store";
import {ProductListing} from "./components/ProductListing";

function App() {
  const { products } = useProducts();
  return (
    <>
      <ProductListing products={products} />
    </>
  )
}

export default App

import {useCart, useProducts} from "@nenoweb/store";
import {ProductListing} from "./components/ProductListing";

function App() {
  const { products } = useProducts();
  const { cartItems } = useCart();
  return (
    <>
      <pre>{JSON.stringify(cartItems, null, 2)}</pre>
      <ProductListing products={products} />
    </>
  )
}

export default App

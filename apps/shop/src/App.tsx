import './index.css'
import {Cart} from "@nenoweb/shopping-cart";
import "@nenoweb/shopping-cart/dist/style.css";
import {useCart, useProducts} from "@nenoweb/store";
import {ProductListing} from "@nenoweb/product-listing";
import "@nenoweb/product-listing/dist/style.css";

function App() {
  const { cartItems } = useCart();
  const { products } = useProducts();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Super Store</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          We are best store in universe and wider.
        </p>
      </div>
      <Cart items={cartItems} />
      <ProductListing products={products} />
    </div>
  )
}

export default App

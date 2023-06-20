import './App.css'
import {ProductCard} from "./components/ProductCard";
import {ProductListing} from "./components/ProductListing";

const products = [
  {
    id: 1,
    title: 'Basic Tee',
    price: '$35',
    image: {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      alt: "Front of men's Basic Tee in black.",
    }
  },
]

function App() {
  return (
    <>
      <ProductListing products={products} />
    </>
  )
}

export default App

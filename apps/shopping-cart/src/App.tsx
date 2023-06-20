import './App.css'
import {Cart} from "./components/Cart";

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    price: '$90.00',
    quantity: 1,
    image: {
      src: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      alt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    }
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    price: '$32.00',
    quantity: 1,
    image: {
      src: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      alt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    }
  }
]

function App() {

  return (
    <>
      <Cart items={products} />
    </>
  )
}

export default App

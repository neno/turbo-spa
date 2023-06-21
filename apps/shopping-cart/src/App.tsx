import { useCart } from '@nenoweb/store';
import { Cart } from "./components/Cart";

function App() {
  const { cartItems } = useCart();

  return (
    <div>
      <Cart items={cartItems} />
    </div>
  );
}

export default App;

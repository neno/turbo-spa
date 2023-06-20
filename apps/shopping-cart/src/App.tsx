// App.tsx
import React from 'react';
import './App.css';
import { useCart } from '@nenoweb/store';
import { Cart } from "./components/Cart";

function App() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <Cart items={cartItems} />
    </div>
  );
}

export default App;

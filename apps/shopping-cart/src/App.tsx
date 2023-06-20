import React from 'react';
import './App.css';
import { useCart } from '@nenoweb/store';

function App() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  console.log(cartItems);

  return (
    <div>
      <pre>{JSON.stringify(cartItems, null, 2)}</pre>
      {/* The rest of your component logic goes here */}
    </div>
  );
}

export default App;

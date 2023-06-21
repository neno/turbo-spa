import { atom, useAtom, useAtomValue } from 'jotai';
import { productItems as products } from '../data/data.json';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

const cartAtom = atom<CartItem[]>([
  {
    product: products[0],
    quantity: 3,
  },
  {
    product: products[3],
    quantity: 2,
  },
]);

const cartItemsQuantityAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const totalQuantity = cartItems.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );

  return totalQuantity;
});

export function useCart() {
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const removeFromCart = (productId: number) => {
    setCartItems((prevCartItems) => prevCartItems.filter(({ product }) => product.id !== productId));
  };

  const addToCart = (product: any, quantity: any) => {
    setCartItems((prevCartItems) => [...prevCartItems, { product, quantity }]);
  };

  const cartItemsQuantity = useAtomValue(cartItemsQuantityAtom);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    cartItemsQuantity,
  };
}

export function useProducts() {
  return {
    products
  }
}

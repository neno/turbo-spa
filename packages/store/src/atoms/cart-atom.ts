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

const [cartItems, setCartItems] = useAtom(cartAtom);

const addToCart = (product: Product, quantity: number) => {
  setCartItems([...cartItems, { product, quantity }]);
};

const removeFromCart = (productId: number) => {
  setCartItems(cartItems.filter(({ product }) => product.id !== productId));
};

const cartItemsQuantityAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const totalQuantity = cartItems.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );

  return totalQuantity;
});

const cartItemsQuantity = useAtomValue(cartItemsQuantityAtom);

export {
  products,
  cartItems,
  addToCart,
  removeFromCart,
  cartItemsQuantity,
};

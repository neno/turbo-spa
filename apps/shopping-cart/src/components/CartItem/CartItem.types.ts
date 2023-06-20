export interface CartItemProps {
  id: number;
  name: string;
  href: string;
  image: {
    src: string;
    alt: string;
  },
  color: string;
  price: string;
  quantity: number;
}
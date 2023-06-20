import {Button} from "@nenoweb/ui";
import {IAddToCartProps} from "./AddToCart.types.ts";
import {FC} from "react";
import {useCart} from "@nenoweb/store";

export const AddToCart: FC<IAddToCartProps> = ({ product}) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({ product, quantity: 1});
  }

  return <Button handleClick={handleClick}>Add to Cart</Button>;
};
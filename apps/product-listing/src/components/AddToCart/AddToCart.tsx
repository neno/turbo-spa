import {Button} from "@nenoweb/ui";
import {IAddToCartProps} from "./AddToCart.types.ts";
import {FC} from "react";
import {useCart} from "@nenoweb/store";

export const AddToCart: FC<IAddToCartProps> = ({ id}) => {
  const { addToCart } = useCart();

  return <Button handleClick={() => {}}>Add to Cart</Button>;
};
import {Button} from "@nenoweb/ui";
import {IAddToCartProps} from "./AddToCart.types.ts";
import {FC} from "react";



export const AddToCart: FC<IAddToCartProps> = () => {
  const handleClick = () => {
    console.log('Add to cart clicked');
  }
  return <Button handleClick={handleClick}>Add to Cart</Button>;
};
import {CartListingProps} from "./CartListing.types.ts";
import {FC} from "react";
import {CartItem} from "../CartItem";

export const CartListing: FC<CartListingProps> = ({ items }) => {
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {items.map((item: CartListingProps) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
import { CartListingProps } from './CartListing.types.ts';
import { FC } from 'react';
import { CartItem } from '../CartItem';
import { cartItems } from '@nenoweb/store';

export const CartListing: FC<CartListingProps> = () => {
  console.log(cartItems);

  return (
    <div className='mt-8'>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {/* {cartItems.map(({ product, quantity }) => (
            <CartItem key={product.id} product={product} quantity={quantity} />
          ))} */}
        </ul>
      </div>
    </div>
  );
};

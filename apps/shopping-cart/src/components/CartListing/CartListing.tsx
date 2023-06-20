import { CartListingProps } from './CartListing.types.ts';
import { FC } from 'react';
import { CartItem } from '../CartItem';

export const CartListing: FC<CartListingProps> = ({items}) => {

  return (
    <div className='mt-8'>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {items.map(({ product, quantity }) => (
            <CartItem key={product.id} product={product} quantity={quantity} />
          ))}
        </ul>
      </div>
    </div>
  );
};

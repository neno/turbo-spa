import { CartListingProps } from './CartListing.types';
import { FC } from 'react';
import { CartItem } from '../CartItem';
import { CartItem as CartItemType } from '@nenoweb/store';

export const CartListing: FC<CartListingProps> = ({items}) => {

  return (
    <div className='mt-8'>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {items.map(({ product, quantity } : CartItemType) => (
            <CartItem key={product.id} product={product} quantity={quantity} />
          ))}
        </ul>
      </div>
    </div>
  );
};

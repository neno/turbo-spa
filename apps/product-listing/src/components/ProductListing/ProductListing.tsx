import {ProductCard} from "../ProductCard";

import styles from './ProductListing.module.css'
import {IProductListingProps} from "./ProductListing.types.ts";
import {FC} from "react";

export const ProductListing: FC<IProductListingProps> = ({ products }) => {
  return (
    <div className={styles.base}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
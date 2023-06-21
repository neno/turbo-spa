import {ProductCard} from "../ProductCard";

import styles from './ProductListing.module.css'
import {IProductListingProps} from "./ProductListing.types";
import {FC} from "react";
import {Product} from "@nenoweb/store";

export const ProductListing: FC<IProductListingProps> = ({ products }) => {
  return (
    <div className={styles.base}>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
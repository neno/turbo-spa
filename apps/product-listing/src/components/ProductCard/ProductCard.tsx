import styles from './ProductCard.module.css';
import {FC} from "react";
import {CartItem} from "@nenoweb/store";
import {AddToCart} from "../AddToCart";

export const ProductCard : FC<CartItem> = ({ product }) => {
  const { id, image, title, price } = product;
  return (<div className={styles.card}>
    <div className={styles.cardImage}>
      <img
        src={image}
        alt={title}
      />
    </div>
    <div className={styles.cardHeading}>
      <h3>
        {title}
      </h3>
      <p className={styles.cardPrice}>{price}</p>
    </div>
    <AddToCart product={product} />
  </div>)
};
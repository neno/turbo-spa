import styles from './ProductCard.module.css';
import {FC} from "react";
import {CartItem} from "@nenoweb/store";

export const ProductCard : FC<CartItem> = ({ id, image, title, price }) => {
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
  </div>)
};
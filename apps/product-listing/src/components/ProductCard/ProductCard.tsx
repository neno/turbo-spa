import styles from './ProductCard.module.css';
import {IProductCardProps} from "./ProductCard.types.js";
import {FC} from "react";
import {AddToCart} from "../AddToCart";

export const ProductCard : FC<IProductCardProps> = ({ id, image, title, price }) => {
  return (<div className={styles.card}>
    <div className={styles.cardImage}>
      <img
        src={image.src}
        alt={image.alt}
      />
    </div>
    <div className={styles.cardHeading}>
      <h3>
        {title}
      </h3>
      <p className={styles.cardPrice}>{price}</p>
    </div>
    <AddToCart id={id} />
  </div>)
};

export type { IProductCardProps };
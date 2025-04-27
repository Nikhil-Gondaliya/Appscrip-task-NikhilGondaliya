import React from "react";
import styles from "./productCard.module.css"

function ProductCard(props) {

  const {cardMainBox,productTitleText,productSubText,cardImage} = styles

  return (
    <div className={cardMainBox}>
      <img src={props.item.image} className={cardImage} alt="Product" />
      <h2 className={productTitleText}>{props.item.title}</h2>
      <p className={productSubText}>{props.item.description}</p>
    </div>
  );
}

export default ProductCard;

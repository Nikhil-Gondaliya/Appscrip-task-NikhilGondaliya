import React, { Fragment } from "react";
import styles from "./products.module.css"
import ProductCard from "@/components/commonComponents/productCardComponent/productCard";


function Products(props) {

  const {productsMainBox} = styles

  return (
    <div className={productsMainBox}>
      {props.cardData?.map((item) => {
        return (
          <Fragment key={item.id}>
            <ProductCard item={item} />
          </Fragment>
        );
      })}
    </div>
  );
}

export default Products;

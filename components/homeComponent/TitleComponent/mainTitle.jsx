import React from "react";
import styles from "./mainTitle.module.css"; 


const {mainTitleBox, mainTitleText,mainSubText} = styles

function MainTitle() {
  return (
    <div className={mainTitleBox}>
      <h1 className={mainTitleText}>DISCOVER OUR PRODUCTS</h1>
      <p className={mainSubText}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </div>
  );
}

export default MainTitle;

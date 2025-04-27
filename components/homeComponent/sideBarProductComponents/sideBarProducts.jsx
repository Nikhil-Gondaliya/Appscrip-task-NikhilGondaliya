import React, { useState, useEffect } from "react";
import SideBar from "../sideBarComponents/sideBar";
import styles from "./sideBarProducts.module.css";
import Products from "../productComponent/products";

function SideBarProducts(props) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.matchMedia("(max-width:768px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { sideProductMainBox } = styles;

  return (
    <div className={sideProductMainBox}>
      {props.showSideBar || (!mobile && <SideBar />)}
      <Products cardData={props.cardData} />
    </div>
  );
}

export default SideBarProducts;

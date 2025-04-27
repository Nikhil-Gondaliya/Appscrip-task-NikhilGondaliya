"use client"; 

import React, { useEffect, useState } from "react";
import styles from "./layout.module.css"; 
import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import { layoutData } from "@/utils/datas";


function Layout({ children }) {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") { 
        setMobile(window.matchMedia("(max-width:768px)").matches);
      }
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const {pageTopLineBox,topIconTextBox, topLineText, topLineIcon, childrenLayout, breadcrumbs, breadLinkBox} = styles

  return (
    <div>
      <div className={pageTopLineBox}>
        {mobile ? (
          <div className={topIconTextBox}>
             <img
              src="/icons/headerIcon.png"
              className={topLineIcon}
              alt="topLineIcon"
            /> 
            <p
              className={topLineText}
              style={{ fontFamily: "InterExtraLight", fontSize: "12px" }}
            >
              Lorem ipsum dolor
            </p>
          </div>
        ) : (
          <>
            {layoutData.map((item) => {
              return (
                <div className={topIconTextBox} key={item.id}>
                   <img
                    src="/icons/headerIcon.png"
                    className={topLineIcon}
                    alt="topLineIcon"
                  />  
                  <p
                    className={topLineText}
                    style={{ fontFamily: "InterExtraLight", fontSize: "12px" }}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
      
      <Header />
      {mobile && (
        <div className={breadLinkBox}>
          <div aria-label="breadcrumb" className={breadcrumbs}>
            <a
              
              href="/"
              style={{
                fontSize: "12px",
                fontFamily: "SimplonNorm",
                color: "#BFC8CD",
                textDecoration: "none",
              }}
            >
              HOME
            </a>
            <span > | </span>

            <a
              
              href="/"
              style={{
                fontSize: "12px",
                fontFamily: "SimplonNorm",
                textDecoration: "none",
              }}
            >
              SHOP
            </a>
          </div>
        </div>
      )}
      <div className={childrenLayout}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

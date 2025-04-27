import React, { useState, useEffect } from "react";
import styles from "./subTitle.module.css"; 
import CustomSelect from "@/components/commonComponents/customSelectComponent/customSelect";
import { subTitleOptions } from "@/utils/datas";

function SubTitle(props) {
  const [select, setSelect] = useState("");
  const [tablet, setTablet] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setTablet(window.matchMedia("(max-width:1000px)").matches);
      setMobile(window.matchMedia("(max-width:768px)").matches);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  const handleChange = (value) => {
    setSelect(value);
  };

  const { subTitMainBox, subTitSubBox, hideShowBtn, hideShowText, recommendedBox } = styles;

  return (
    <div className={subTitMainBox}>
      {mobile ? (
        <div className={subTitSubBox}>
          <span
            style={{
              fontSize: mobile ? "13px" : "15px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
            }}
          >
            FILTER
          </span>
        </div>
      ) : (
        <>
          <div className={subTitSubBox}>
            <span
              style={{
                fontSize: tablet ? "15px" : "18px",
                fontFamily: "SimplonNorm",
                fontWeight: 700,
              }}
            >
              {props.cardData?.length} Items
            </span>
            <button
              onClick={props.handleSideBar}
              className={hideShowBtn}
              style={{
                fontSize: tablet ? "14px" : "16px",
                fontFamily: "SimplonNorm",
              }}
            >
              <i
                className={
                  props.showSideBar ? "fa fa-angle-left" : "fa fa-angle-right"
                }
                aria-hidden="true"
              ></i>
              <span className={hideShowText}>
                {props.showSideBar ? "HIDE FILTER" : "SHOW FILTER"}
              </span>
            </button>
          </div>
        </>
      )}
      <div className={recommendedBox}>
        <CustomSelect
          select={select}
          handleChange={handleChange}
          selectOptions={subTitleOptions}
          mobile={false}
          tablet={false}
        />
      </div>
    </div>
  );
}

export default SubTitle;

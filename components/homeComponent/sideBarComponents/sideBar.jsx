import React from "react";
import SliderOptions from "../../commonComponents/sideBarOptionComponent/sliderOptions";
import styles from "./sideBar.module.css"

function SideBar() {

  const {sideMainBox, customizbleBox,custoLabelAlgin, customizeCheckbox,customizeText} = styles

  return (
    <div className={sideMainBox}>
      <div className={customizbleBox}>
        <label className={custoLabelAlgin}>
          <input type="checkbox" className={customizeCheckbox} />
          <span>
            <span className={customizeText}>CUSTOMIZBLE</span>
          </span>
        </label>
      </div>

      <SliderOptions title="IDEAL FOR" subtitle="ALL" />
      <SliderOptions title="OCCASION" subtitle="ALL" />
      <SliderOptions title="WORK" subtitle="ALL" />
      <SliderOptions title="FABRIC" subtitle="ALL" />
      <SliderOptions title="SEGMENT" subtitle="ALL" />
      <SliderOptions title="SUITABLE FOR" subtitle="ALL" />
      <SliderOptions title="RAW MATERIALS" subtitle="ALL" />
      <SliderOptions title="PATTERN" subtitle="ALL" />
    </div>
  );
}

export default SideBar;

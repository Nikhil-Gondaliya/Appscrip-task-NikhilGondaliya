import React, { useEffect, useRef, useState } from "react";
import styles from "./sliderOption.module.css";
import sideBarStyles from "../../homeComponent/sideBarComponents/sideBar.module.css"

function SliderOptions(props) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (expanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [expanded]);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const {accordionContainer, accordionHeader, accordionHeaderContent, accordionTitle,accordionSubtitle,accordionExpandIcon,accordionDetailsWrapper,accordionDetails,unSelect,checkboxGroup} = styles

  const {custoLabelAlgin,customizeCheckbox,accordionCheckLabel } = sideBarStyles

  return (
    <div className={accordionContainer}>
      <div
        className={`${accordionHeader} ${expanded ? "expanded" : ""}`}
        onClick={handleAccordionChange}
      >
        <div className={accordionHeaderContent}>
          <h3 className={accordionTitle}>{props.title}</h3>
          <p className={accordionSubtitle}>{props.subtitle}</p>
        </div>
        <div className={accordionExpandIcon}>
          {expanded ? (
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </div>
      </div>
      <div className={accordionDetailsWrapper} style={{ maxHeight }}>
        <div className={accordionDetails} ref={contentRef}>
          <p className={unSelect}>Unselect</p>
          <div className={checkboxGroup}>
            <label className={custoLabelAlgin}>
              <input type="checkbox" className={customizeCheckbox} />
              <span>
                <span className={accordionCheckLabel}>Men</span>
              </span>
            </label>
            <label className={custoLabelAlgin}>
              <input type="checkbox" className={customizeCheckbox} />
              <span>
                <span className={accordionCheckLabel}>Women</span>
              </span>
            </label>
            <label className={custoLabelAlgin}>
              <input type="checkbox" className={customizeCheckbox} />
              <span>
                <span className={accordionCheckLabel}>Baby & Kids</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderOptions;

import React, { Fragment, useEffect, useRef, useState } from "react";

import styles from "../../footerComponent/footer.module.css";

function FooterAccordion(props) {
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

  const {ftCommonSubText,ftCommonMainTitle,ftAccordionContainer,ftAccordionHeader,ftAccordionHeaderContent,ftAccordionExpandIcon,ftAccordionDetailsWrapper,ftAccordionDetails} = styles

  return (
    <div className={ftAccordionContainer}>
      <div
        className={`${ftAccordionHeader} ${expanded ? "expanded" : ""}`}
        onClick={handleAccordionChange}
      >
        <div className={ftAccordionHeaderContent}>
          <p className={ftCommonMainTitle}>{props.title}</p>
        </div>
        <div className={ftAccordionExpandIcon}>
          {expanded ? (
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </div>
      </div>
      <div className={ftAccordionDetailsWrapper} style={{ maxHeight }}>
        <div className={ftAccordionDetails} ref={contentRef}>
          {props.subtitle.map((item) => {
            return (
              <Fragment key={item.id}>
                {item.icon ? (
                  <img
                    src={`/icons/${item.icon}`}
                    style={{
                      width: "30px",
                      marginLeft: "10px",
                    }}
                    alt={item.alt}
                  />
                ) : (
                  <p className={ftCommonSubText}>{item.label}</p>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FooterAccordion;

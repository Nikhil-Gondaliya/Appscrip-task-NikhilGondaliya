import React, { useState } from "react";
import styles from "./customSelect.module.css"; 

const CustomSelect = ({ select, handleChange, selectOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id) => {
    handleChange(id);
    setIsOpen(false);
  };

  const {customSelectContainer,customSelectTrigger ,customSelectDropdown,customSelectOption} = styles

  return (
    <div className={customSelectContainer}>
      <div
        className={customSelectTrigger}
        onClick={toggleDropdown}
        style={{
          fontFamily: "InterExtraBold",
        }}
      >
        {selectOptions.find((item) => item.id === select)?.label}
        {isOpen ? (
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        )}
      </div>
      <div className={`${customSelectDropdown} ${isOpen ? "open" : ""}`}>
        {selectOptions.map((item) => (
          <div
            key={item.id}
            className={customSelectOption}
            onClick={() => handleSelect(item.id)}
            style={{
              fontFamily: "SimplonNorm",
              fontWeight: select === item.id ? 700 : 400,
              display: "flex",
              justifyContent: "end",
            }}
          >
            {select === item.id && (
              <i className="fa fa-check" aria-hidden="true"></i>
            )}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;

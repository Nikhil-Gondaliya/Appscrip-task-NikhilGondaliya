import React, { useEffect, useState } from "react";
import styles from "./header.module.css";

function Header() {
 
  const [tablet, setTablet] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ENG");

  useEffect(() => {
    const handleResize = () => {
      setTablet(window.matchMedia("(max-width:1000px)").matches);
      setMobile(window.matchMedia("(max-width:768px)").matches);
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize); // Listen for screen size changes

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const {headerMainBox, headerSubBox, headerPageListBox, headerTitles, mobileIcon, headerSideIconBox, headerIcon, headerLogoText,customDropdown,dropdownHeader, dropdownOptions } = styles

  return (
    <header className={headerMainBox}>
      <div className={headerSubBox}>
        {mobile && (
          <img
            src="/icons/menu.png"
            alt="header icon"
            className={mobileIcon}
          />
        )}
        <img
          src="/icons/headerIcon.png"
          alt="header icon"
          className={headerIcon}
        />
        <span
          className={headerLogoText}
          style={{
            fontSize: mobile ? "22px" : tablet ? "29px" : "35px",
            fontFamily: "InterExtraBold",
          }}
        >
          LOGO
        </span>
        <div className={headerSideIconBox}>
          <img
            src="/icons/search-normal.png"
            alt="search icon"
            className="headerSideIcon"
          />
          <img
            src="/icons/heart.png"
            alt="heart icon"
            className="headerSideIcon"
          />
          <img
            src="/icons/shopping-bag.png"
            alt="shopping bag icon"
            className="headerSideIcon"
          />
          {!mobile && (
            <img
              src="icons/profile.png"
              alt="profile icon"
              className="headerSideIcon"
            />
          )}

          {!mobile && (
            <div className={customDropdown}>
              <div className={dropdownHeader} onClick={toggleDropdown}>
                {selectedOption}
                {isOpen ? (
                  <i className="fa fa-angle-up" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                )}
              </div>
              {isOpen && (
                <ul className={dropdownOptions}>
                  <li onClick={() => handleOptionSelect("ENG")}>ENG</li>
                  <li onClick={() => handleOptionSelect("HINDI")}>HINDI</li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {!mobile && (
        <nav className={headerPageListBox}>
          {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((title) => (
            <span
              key={title}
              style={{
                fontSize: tablet ? "17px" : "20px",
                fontFamily: "SimplonNorm",
                fontWeight: "bold",
              }}
              className={headerTitles}
            >
              {title}
            </span>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;

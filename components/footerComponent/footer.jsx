import React, { useEffect, useState } from "react";
import FooterAccordion from "../commonComponents/footerAccordionComponent/footerAccordion";
import styles from "./footer.module.css";
import { footerDataOne, footerDataThree, footerDataTwo } from "@/utils/datas";

function Footer() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.matchMedia("(max-width:768px)").matches);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  const {ftMainBox,ftBoxOne,ftSubscribeMainBox,ftInputSubBox,ftInputFiled, ftSubscribeBtn, ftContactUsBox,ftBoxTwo,ftMettaBox,usaLogo,ftContactNumberBox,linkInstaIcon,paymentInfoBox,paymentIcons,ftBeFirstTitleText,ftSignUpText,ftContactNumberText,ftCommonSubText,ftCommonMainTitle,ftCommonSmText,ftCurrencyBox,ftMettaBox3,ftMettaBox2,instaLinkBox,ftCopyRightText} = styles

  const isMobileClassName =mobile ? ftMettaBox2 : ftMettaBox

  return (
    <div className={ftMainBox}>
      <div className={ftBoxOne}>
        <div className={ftSubscribeMainBox}>
          <p className={ftBeFirstTitleText}>BE THE FIRST TO KNOW</p>
          <p className={ftSignUpText}>
            {mobile
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text."
              : "Sign up for updates from mettā muse."}
          </p>
          <div className={ftInputSubBox}>
            <input
              placeholder="Enter your e-mail..."
              className={ftInputFiled}
            />
            <button className={ftSubscribeBtn}>Subscribe</button>
          </div>
        </div>
        <div className={ftContactUsBox}>
          <div>
            <p className={ftBeFirstTitleText}>
              {mobile ? "CALL US" : "CONTACT US"}
            </p>
            <div className={ftContactNumberBox}>
              <p className={ftContactNumberText}>
                +44 221 133 5360
                {mobile && (
                  <i
                    className="fa fa-stop"
                    aria-hidden="true"
                    style={{ fontSize: "6px", rotate: "45deg" }}
                  ></i>
                )}
                {mobile && "customercare@mettamuse.com"}
              </p>
            </div>
          </div>

          {!mobile && (
            <p className={ftSignUpText}>customercare@mettamuse.com</p>
          )}
          <p className={ftBeFirstTitleText} style={{ marginTop: "10px" }}>
            CURRENCY
          </p>
          <p className={ftCurrencyBox}>
            <img
              src="/images/usaIcon.png"
              className={usaLogo}
              alt="usaLogo"
            />
            <i
              className="fa fa-stop"
              aria-hidden="true"
              style={{ fontSize: "6px", rotate: "45deg" }}
            ></i>
            USD
          </p>
          {!mobile && (
            <p className={ftCommonSmText}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          )}
        </div>
      </div>
      <div className={ftBoxTwo}>
        <div className={ftMettaBox}>
          {mobile ? (
            <FooterAccordion title="mettā muse" subtitle={footerDataOne} />
          ) : (
            <>
              <p className={ftCommonMainTitle}>mettā muse</p>
              {footerDataOne.map((item) => {
                return (
                  <p className={ftCommonSubText} key={item.id}>
                    {item.label}
                  </p>
                );
              })}
            </>
          )}
        </div>
        <div className={isMobileClassName}>
          {mobile ? (
            <FooterAccordion title="QUICK LINKS" subtitle={footerDataTwo} />
          ) : (
            <>
              <p className={ftCommonMainTitle}>QUICK LINKS</p>
              {footerDataTwo.map((item) => {
                return (
                  <p className={ftCommonSubText} key={item.id}>
                    {item.label}
                  </p>
                );
              })}
            </>
          )}
        </div>
        <div className={ftMettaBox3}>
          {mobile ? (
            <FooterAccordion title="Follow Us" subtitle={footerDataThree} />
          ) : (
            <div>
              <p className={ftBeFirstTitleText}>Follow Us</p>
              <div className={instaLinkBox}>
                <img
                  src="/icons/linkdin.png"
                  className={linkInstaIcon}
                  alt="linkdin"
                />
                <img
                  src="/icons/Insta.png"
                  className={linkInstaIcon}
                  alt="insta"
                />
              </div>
            </div>
          )}
          <div className={paymentInfoBox}>
            <p className={ftCommonSubText}>mettā muse Accepts</p>
            <img
              src="/images/frame.png"
              className={paymentIcons}
              alt="paymentIcons"
            />
          </div>
        </div>
      </div>
      <p className={ftCopyRightText}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  );
}

export default Footer;

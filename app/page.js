"use client"; 

import SideBarProducts from "@/components/homeComponent/sideBarProductComponents/sideBarProducts";
import SubTitle from "@/components/homeComponent/subTitleComponent/subTitle";
import MainTitle from "@/components/homeComponent/TitleComponent/mainTitle";
import { useEffect, useState } from "react";

export default function Home() {

  const [showSideBar, setShowSideBar] = useState(false);
  const [cardData, setCardData] = useState();

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setCardData(json));
  }, []);

  return (
    <div style={{padding:"10px"}}>
     <MainTitle />

     <SubTitle
          showSideBar={showSideBar}
          handleSideBar={handleSideBar}
          cardData={cardData}
        />

        <SideBarProducts showSideBar={showSideBar} cardData={cardData} />

    </div>
  );
}

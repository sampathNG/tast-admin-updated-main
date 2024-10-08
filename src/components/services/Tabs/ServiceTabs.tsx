"use client";

import { useState } from "react";

import CardThreeUpdate from "../CardThreeUpdate ";
import CardTwoUpdate from "../CardTwoUpdate";
import CardFourUpdate from "../CardFourUpdate";
import PhotoVideoUpdate from "../PhotoVideoUpdate";
import BannerLogoPage from "../BannerLogoPage ";
import Tab from "../Tab";
// import PaymentIcon from "../PaymentIcon";
import SupportIcon from "../SupportIcon";

const Tabs = [
  {
    name: `Banner`,
    state: "logo",
  },
  {
    name: `3 Card`,
    state: "threeCard",
  },
  {
    name: `4 Card`,
    state: "fourCard",
  },
  {
    name: `Security`,
    state: "secondCard",
  },
  {
    name: `Service Gallery`,
    state: "photoVideo",
  },
  {
    name: `Support  icon & support logo`,
    state: "paymentIcon",
  },
];

const ServiceTab = () => {
  const [isVisible, setIsVisible] = useState<string | null>(null);
  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center space-x-3 shadow-md shadow-[#000000a3] py-4">
        {Tabs.map((tab, index) => (
          <Tab
            key={index}
            name={tab.name}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        ))}
      </div>
      {/* Tabs body */}
      <div className="custom-tab-style">{isVisible === "Banner" && <BannerLogoPage />}</div>
      <div className="custom-tab-style">{isVisible === "3 Card" && <CardThreeUpdate />}</div>
      <div className="custom-tab-style">{isVisible === "4 Card" && <CardFourUpdate />}</div>
      <div className="custom-tab-style">{isVisible === "Security" && <CardTwoUpdate />}</div>
      <div className="custom-tab-style">{isVisible === "Service Gallery" && <PhotoVideoUpdate />}</div>
      <div className="custom-tab-style">{isVisible === "Support  icon & support logo" && <SupportIcon />}</div>
    </>
  );
};

//

export default ServiceTab;

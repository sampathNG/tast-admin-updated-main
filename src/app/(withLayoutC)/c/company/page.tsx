"use client";
import CreateGlobalLocations from "@/components/ui/MergedComponents/CreateGlobalLocations";
import InfaomationTechnology from "@/components/ui/MergedComponents/InformationTechonology";
import OfficeAddress from "@/components/ui/MergedComponents/officeaddres/OfficeAddress";
import CivilEngineering from "@/components/ui/temp/CivilEngineering";
import CompanyTab from "@/components/ui/temp/CompanyTab";
import ContactUsDropDownTable from "@/components/ui/temp/ContactUsDropDownTable";
import SocialSharePayment from "@/components/ui/temp/SocialSharePayment";
import SubsribesManuItems from "@/components/ui/temp/SubsribesManuItems";

import React, { useState } from "react";

const CompanyTabPage = () => {
  const [currentTab, setCurrentTab] = useState("tab1");
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  // Table open triger

  const [dropdown, setDropdown] = useState({
    officeDropDown: false,
    ContactUsTable: false,
    globalLocationDropDown: false,
    securityDropDown: false,
    subsribesManu: false,
    company: false,
    consultingDropDown: false,
    customSoftware: false,
    businessSolution: false,
  });

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isMessageSaved, setIsMessageSaved] = useState(false);
  const [Consulting, setConsulting] = useState(false);
  const [ContactUsTable, setContactUsTable] = useState(false);
  // const []
  const sectionToStateMapping = {
    "Office address": "officeDropDown",
    "Contact Us": "ContactUsTable",
    Subsribes: "subsribesManu",
    "Global location": "globalLocationDropDown",
    "Security system": "securityDropDown",
    "Custom software development": "customSoftware",
    "Best it & Business solution": "businessSolution",
    Consulting: "consultingDropDown",
  };
  return (
    <section className="w-full">
      <div className="flex items-center justify-center gap-2 py-4 shadow-md mb-4 shadow-[#767676]">
        <button
          className={`${"tab1"} ${currentTab === "tab1" ? "activeTab" : ""
            }  rounded-md border-2 bg-[#6366F1] px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab1")}
        >
          Office address
        </button>
        <button
          className={`${"tab2"} ${currentTab === "tab2" ? "activeTab" : ""
            }  rounded-md border-2 bg-[#6366F1] px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab2")}
        >
          Global location
        </button>
        <button
          className={`${"tab3"} ${currentTab === "tab3" ? "activeTab" : ""
            }  active:bg rounded-md border-2 bg-[#6366F1] px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab3")}
        >
          Contact Us
        </button>
        <button
          className={`${"tab4"} ${currentTab === "tab4" ? "activeTab" : ""
            }  rounded-md border-2 bg-[#6366F1] px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab4")}
        >
          Subsribes
        </button>
        <button
          className={`${"tab4"} ${currentTab === "tab4" ? "activeTab" : ""
            }  rounded-md border-2 bg-[#6366F1] px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("company")}
        >
          Comapny
        </button>

        <button
          className={`${"tab5"} ${currentTab === "tab5" ? "activeTab" : ""
            }  rounded-md border-2 bg-[#6366F1] px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab5")}
        >
          information technology
        </button>
        <button
          className={`${"tab6"} ${currentTab === "tab6" ? "activeTab" : ""
            }  rounded-md border-2 bg-[#6366F1] px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab6")}>
          Civil Engineering
        </button>
        <button
          className={`${"tab7"} ${currentTab === "tab7" ? "activeTab" : ""
            }  rounded-md border-2 bg-[#6366F1] px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab7")}
        >
          Best it & Business solution
        </button>
      </div>
      <div className="min-h-screen">
        {/* Buttons Contant */}
        {currentTab === "tab1" && (
          <div>
            <OfficeAddress />
          </div>
        )}
        {currentTab === "tab2" && (
          <div className="px-4">
            <CreateGlobalLocations />
          </div>
        )}
        {currentTab === "tab3" && (
          <div className="px-4">
            <ContactUsDropDownTable />
          </div>
        )}
        {currentTab === "tab4" && (
          <div className="px-4">
            <SubsribesManuItems />
          </div>
        )}
        {currentTab === "company" && (
          <div className="px-4">
            <CompanyTab />
          </div>
        )}
        {currentTab === "tab5" && (
          <div className="px-4">
            <InfaomationTechnology />
          </div>
        )}
        {currentTab === "tab6" && (
          <div className="px-4">
            <CivilEngineering />
          </div>
        )}
        {currentTab === "tab7" && (
          <div className="px-4">
            <SocialSharePayment />
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanyTabPage;

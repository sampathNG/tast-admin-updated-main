import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ServiceTab from "@/components/services/Tabs/ServiceTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USUKC | Our Services",
  description: "We provide proffesional services",
};

const ServicePage = () => {
  return (
    <div className="w-full 2xl:p-10">
      {/* <Breadcrumb pageName="Services" />
      <h1 className="text-center text-2xl">Our services and technologies</h1> */}

      <div>
        <ServiceTab />
      </div>
    </div>
  );
};

export default ServicePage;

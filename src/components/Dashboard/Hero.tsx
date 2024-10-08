"use client";
import React, { useState } from "react";

import CardDataStats from "../CardDataStats";
import { DashboardData } from "@/constants/dashboardData";

import LineChart from "../ui/CustomLineChart";

import dynamic from "next/dynamic";
import RenewChart from "../ui/RenewChart";

const ReBar = dynamic(
  () => import("recharts").then((module) => module.BarChart),
  { ssr: false },
);

const ECommerce: React.FC = () => {
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleSeeMore = () => {
    setVisibleCount(DashboardData.length);
  };
  return (
    <>
       <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {DashboardData.slice(0, visibleCount).map((data, index) => (
          <CardDataStats key={index} name={data.name} number="$3.456K">
            <data.icon />
          </CardDataStats>
        ))}
      </div>
      {visibleCount < DashboardData.length && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={handleSeeMore} 
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            See More
          </button>
        </div>
      )}
    </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <LineChart />
        </div>

        {/*  */}
        <div className="col-span-12">
          <RenewChart />
        </div>
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;

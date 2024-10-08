import React, { ReactNode } from "react";

interface CardDataStatsProps {
  name: string;
  number: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  name,
  number: total,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-2 flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
      <h2 className="font-semibold">{name}</h2>
      <div className="mt-4 flex flex-col space-y-3">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
        </div>

        <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
            style={{ width: "88%" }}
          >
            {" "}
            88%
          </div>
        </div>

        <div className="flex justify-between">
          <span>Previous Period</span>
          <span className="text-blue-600">88%</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;

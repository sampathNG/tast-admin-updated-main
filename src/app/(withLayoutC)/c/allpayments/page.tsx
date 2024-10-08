"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ICTable from "@/components/ui/ICTable";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomSearch from "@/components/ui/CustomSearch";
import { PaymentsData } from "@/constants/paymentData";
import { IoSearch } from "react-icons/io5";
import { IPayment } from "@/types/payment";
import { DatePicker } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import Card from "../../../../components/Card/Card";



const cardTitles = [
  "Total payment",
  "Total Pay amount ($)",
  "Total Pending payment",
  "Total accepted payment",
  "Total spam payment",
  "Total spam pay amount ($)"
];

const ALLPayments = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const statusColors: { [key: string]: string } = {
    spam: 'bg-red',
    pending: 'bg-blue-400',
    accepted: 'bg-green-400',
  };

  let columns = [
     {
      title: "No",
      dataIndex: "sl",
      render: (no: number) => {
           return (
          <span className={`px-3 py-1 flex justify-center rounded text-black bg-[#FFB200]`}>
            {no}
          </span>
        );
      }
    },
    { title: "Payment ID", dataIndex: "paymentID" },
    { title: "Project Name", dataIndex: "ProjectName" },
    { title: "Payment Type", dataIndex: "paymentType" },
    { title: "Account Name", dataIndex: "accountName" },
    { title: "Account Number", dataIndex: "accountNumber" },
    { title: "Transaction ID", dataIndex: "transactionId" },
    { title: "Payment Date Amount", dataIndex: "paymentDay" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        const statusClass = statusColors[status];
        return (
          <span className={`px-4 flex justify-center items-center py-1 rounded text-white ${statusClass}`}>
            {status}
          </span>
        );
      }
    },
  
    {
      title: "See",
      render: (data: IPayment) => {
        return (
          <span>
            <Link href={`/c/allpayments/view/${data?.paymentID}`}>
              <button className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-white  transition-all hover:bg-white hover:text-blue-600 hover:shadow-md ">
                View
              </button>
            </Link>
          </span>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const paymentStatus = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Pending",
      label: "Pending",
    },
    {
      value: "Accepted",
      label: "Accepted",
    },
    {
      value: "Spam",
      label: "Spam",
    },
  ];
  const paymentMethod = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Bank",
      label: "Bank",
    },
    {
      value: "Mobile Wallet",
      label: "Mobile Wallet",
    }
  ];
  const accountName = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "SBI Bank",
      label: "SBI Bank",
    },
    {
      value: "tsd Bank",
      label: "tsd Bank",
    },
    {
      value: "Stv Bank",
      label: "Stv Bank",
    },
  ];

  const onSearch = (value: any) => {
    console.log(value);
  };
  const onStartDate = (value: any) => {
    console.log(value);
  };
  const onEndDate = (value: any) => {
    console.log(value);
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="All Payments" />

      <div className="rounded-xl py-5 px-6">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 h-fit gap-3 mb-3">
          {cardTitles.map((title, i) => (
            <Card title={title} key={i} />
          ))}
        </div>
      </div>
{/* =============== */}
<div className="grid w-full grid-cols-1 items-center justify-between gap-3 py-4 md:grid-cols-3 xl:grid-cols-6">
<div className="flex">
          show
          <select className="select select-ghost">
            <option disabled>15</option>
            <option>30</option>
            <option>60</option>
            <option>120</option>
          </select>
          row
          <select className="select select-ghost">
            <option disabled>---</option>
            <option>--</option>

          </select>
        </div>
        <CustomSearch onSearch={onSearch} />

        <div className="flex items-center gap-1">
          <DatePicker onChange={onStartDate} />
          <span>To</span>
          <DatePicker onChange={onEndDate} />
        </div>
        
        <CustomSelect options={paymentMethod} placeholder="Payment Method" />
        <CustomSelect options={accountName} placeholder="Account Name" />
        <CustomSelect options={paymentStatus} placeholder="Status" />
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={PaymentsData}
        pageSize={size}
        totalPages={PaymentsData?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ALLPayments;

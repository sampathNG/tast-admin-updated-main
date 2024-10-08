"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ICTable from "@/components/ui/ICTable";
import CustomSearch from "@/components/ui/CustomSearch";
import CustomSelect from "@/components/ui/CustomSelect";
import { RefundData } from "@/constants/paymentData";
import { IRefundPayment } from "@/types/payment";
import { DatePicker } from "antd";
import Link from "next/link";
import { useState } from "react";
import Card from "../../../../components/Card/Card";

const cardTitles = [
  "Total Online Refund",
  "Total Refund amount ($)",
  "Total Pending Refund",
  "Total Sending Refund",
  "Total Ineligible Refund",
  "Total Sending Refund Amount ($)"
];

const OnlinePaymentChecking = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const statusColors: { [key: string]: string } = {
    Ineligible: 'bg-red',
    Pending: 'bg-blue-400',
    Sending: 'bg-green-400',
  };

  let columns = [
    {
      title: "No",
      dataIndex: "sl",
      render: (no: number) => {
           return (
          <span className={`px-2 py-1 flex justify-center rounded text-black bg-[#FFB200]`}>
            {no}
          </span>
        );
      }
    },
    { title: "Refund ID", dataIndex: "refundId" },
    { title: "Project Name", dataIndex: "projectName" },
    { title: "Refund Type", dataIndex: "refundMethod" },
    { title: "Account Name", dataIndex: "accountName" },
    { title: "Account Number", dataIndex: "accountNumber" },
    { title: "Refund Amount", dataIndex: "refundAmount" },
    { title: "Refund Day", dataIndex: "refundDay" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        const statusClass = statusColors[status];
        return (
          <span className={`px-2 py-1 rounded text-white ${statusClass}`}>
            {status}
          </span>
        );
      }
    },
    {
      title: "See",
      render: (data: IRefundPayment) => {
        return (
          <span>
            <Link href={`/c/refund-payment-checking/view/${data?.refundId}`}>
              <button className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-white transition-all hover:bg-white hover:text-blue-600 hover:shadow-md">
                View
              </button>
            </Link>
          </span>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const refundStatus = [
    { value: "All", label: "All" },
    { value: "Pending", label: "Pending" },
    { value: "Sending", label: "Sending" },
    { value: "Ineligible", label: "Ineligible" },
  ];

  const refundMethod = [
    { value: "All", label: "All" },
    { value: "Bank", label: "Bank" },
    { value: "Mobile Wallet", label: "Mobile Wallet" }
  ];

  const accountName = [
    { value: "All", label: "All" },
    { value: "SBI Bank", label: "SBI Bank" },
    { value: "tsd Bank", label: "tsd Bank" },
    { value: "Stv Bank", label: "Stv Bank" },
  ];

  const onSearch = (value: string) => {
    console.log(value);
  };

  const onStartDate = (value: string) => {
    console.log(value);
  };

  const onEndDate = (value: string) => {
    console.log(value);
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Refund" />
      <div className="rounded-xl py-5 px-6">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 h-fit gap-3 mb-3">
          {cardTitles.map((title, i) => (
            <Card title={title} key={i} />
          ))}
        </div>
      </div>
      <div className="grid w-full grid-cols-1 items-center justify-between gap-3 py-4 md:grid-cols-3 xl:grid-cols-6">
        <div className="flex">
          show
          <select className="select select-ghost w-fit">
            <option>All</option>
            <option>15</option>
            <option>30</option>
            <option>60</option>
            <option>120</option>
          </select>
          row
          <select className="select select-ghost w-fit">
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
        <CustomSelect options={refundMethod} placeholder="Refund Method" />
        <CustomSelect options={accountName} placeholder="Account Name" />
        <CustomSelect options={refundStatus} placeholder="Status" />
      </div>
      <ICTable
        loading={false}
        columns={columns}
        dataSource={RefundData}
        pageSize={size}
        totalPages={RefundData?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default OnlinePaymentChecking;

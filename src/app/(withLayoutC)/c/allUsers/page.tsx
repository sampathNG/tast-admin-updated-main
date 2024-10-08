"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import ICTable from "@/components/ui/ICTable";
import BleuButton from "@/components/ui/button/BleuButton";
import CustomSearch from "@/components/ui/CustomSearch";
import CustomSelect from "@/components/ui/CustomSelect";
import { users } from "@/constants/userData";
import { IUser } from "@/types/user";
import { DatePicker } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import Card from "../../../../components/Card/Card";
import Page from "./view/[userId]/page"
import Modal from "@/components/Modal/Modal"
interface AllUsersProps {
  userId: string;
  userName: string;
}

const status = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Active",
    label: "Active",
  },
  {
    value: "Block",
    label: "Block",
  },
];



const cardTitles = [
  "Total User A/c",
  "Total Active A/c",
  "Total Pending A/c",
  "Total Deleted A/c",
];

const AllUsers: React.FC = ({ data }: any) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const statusColors: { [key: string]: string } = {
    Block: 'bg-red',
    Active: 'bg-green-600',
  };

  let columns = [
    {
      title: "No",
      dataIndex: "no",
      render: (no: number) => {
        return (
          <span className={`px-1 py-1 flex justify-center rounded text-black bg-[#FFB200]`}>
            {no}
          </span>
        );
      }
    },
    { title: "User Id", dataIndex: "userId" },
    { title: "User Name", dataIndex: "userName" },
    // { title: "Email", dataIndex: "email" },
    { title: "Total Order", dataIndex: "totalOrder" },
    { title: "Total Amount", dataIndex: "totalAmount" },
    { title: "Total Paid", dataIndex: "totalPaid" },
    { title: "Money Left", dataIndex: "moneyLeft" },
    { title: "Refund Amount", dataIndex: "refundAmount" },
    { title: "Profit", dataIndex: "profit" },
    {
      title: "Suspend",
      dataIndex: "suspend",
      render: (suspend: number) => {
        return (
          <span className={`px-1 py-1 flex justify-center rounded text-white bg-blue-950`}>
            {suspend}
          </span>
        );
      }
    },
    {
      title: "Account Status",
      dataIndex: "status",
      render: (status: string) => {
        const statusClass = statusColors[status];
        // const statusClass = statusColors[status] || 'bg-black';
        return (
          <span className={`px-2 py-1 flex justify-center rounded text-white ${statusClass}`}>
            {status}
          </span>
        );
      }
    },
    {
      title: "See",
      render: (data: IUser) => {
        return (
          <span>
            <button
              className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-white transition-all hover:bg-white hover:text-blue-600 hover:shadow-md"
              onClick={openModal}
            >
              View
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <Page params={{ userId: data.userId, userName: data.userName }} />
            </Modal>
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

  const onSearch = (value: string) => {
    console.log(value);
  };
  const onStartDate = (value: string) => {
    console.log(value);
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="All Users" />


      <div className="rounded-xl py-5 px-6">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 h-24 gap-3 mb-3">
          {cardTitles.map((title, i) => (
            <Card title={title} key={i} />
          ))}
        </div>
      </div>




      <div className="grid w-full  grid-cols-1 items-center justify-between gap-3 py-4 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex gap-2 mr-5">
          show
          <select className="select select-ghost w-10">
            <option disabled>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
          </select>
          row
          <select className="select select-ghost w-10">
            <option disabled>---</option>
            <option>--</option>

          </select>
        </div>

        <CustomSearch onSearch={onSearch} />
        <div className="col-span-2 flex items-center justify-center gap-2">
          <DatePicker onChange={onStartDate} />
          <span>To</span>
          <DatePicker onChange={onStartDate} />
        </div>
        <CustomSelect options={status} placeholder="Status" />
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={users}
        pageSize={size}
        totalPages={users?.length}
        // showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      // rowKey="id"
      // expandable={{
      //   expandedRowRender: (record: any) => (
      //     <p style={{margin: 0}}>{record.truckDescription}</p>
      //   ),
      //   rowExpandable: (record: any) =>
      //     record.truckDescription !== "Not Expandable",
      // }}
      />
    </div>
  );
};

export default AllUsers;

"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import ICTable from "@/components/ui/ICTable";
import CustomSearch from "@/components/ui/CustomSearch";
import CustomSelect from "@/components/ui/CustomSelect";
import { PaymentTrack } from "@/constants/paymentTrack";
import { DatePicker } from "antd";


import { useState } from "react";

const PayTrack = () => {
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");

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
        {
            title: "Currency ISo", dataIndex: "currency",
            render: (currency: string) => {
                return <span className="font-bold">{currency}</span>
            }
        },

        { title: "Amount", dataIndex: "amount", },
        { title: "Currency ISo", dataIndex: "currency" },
        { title: "Amount", dataIndex: "amount" },
        { title: "Currency ISo", dataIndex: "currency" },
        { title: "Amount", dataIndex: "amount" },
        { title: "Currency ISo", dataIndex: "currency" },
        { title: "Amount", dataIndex: "amount" },
        { title: "Currency ISo", dataIndex: "currency" },
        { title: "Amount", dataIndex: "amount" },

    ];

    const onPaginationChange = (pageSize: number) => {
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

    const wallet = [
        {
            value: "All",
            label: "All",
        },
        {
            value: "Paypal",
            label: "Paypal",
        },
        {
            value: "Apple Pay",
            label: "Apple Pay",
        },
        {
            value: "Google Pay",
            label: "Google Pay",
        },
    ];
    const bankSelect = [
        {
            value: "All",
            label: "All",
        },
        {
            value: "SBI",
            label: "SBI Bank",
        },
        {
            value: "SO",
            label: "SO Bank",
        },
        {
            value: "TAD",
            label: "TAD Bank",
        },
    ];
    const chooseStatus = [
        {
            value: "All",
            label: "All",
        },
        {
            value: "accepted",
            label: "Accepted",
        },
        {
            value: "pending",
            label: "Pending",
        }
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
        <div className="w-full p-4 md:p-6 2xl:p-10 ">
            <Breadcrumb pageName="Monthly Pay Track" />
            <div className="grid w-full grid-cols-1 items-center justify-between gap-3 py-4 md:grid-cols-4 xl:grid-cols-7">
                <div className="flex">
                    show
                    <select className="select select-ghost w-10">
                        <option disabled>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                    </select>
                    row
                    <select className="select select-ghost w-10">
                        <option disabled >---</option>
                        <option>--</option>

                    </select>
                </div>
                <CustomSearch onSearch={onSearch} />
                <CustomSelect options={chooseStatus} placeholder="Payment Type" />
                <div className="col-span-2 flex items-center justify-center gap-2">
                    <DatePicker onChange={onStartDate} />
                    <span>To</span>
                    <DatePicker onChange={onStartDate} />
                </div>
                <CustomSelect options={wallet} placeholder="E-wallets select" />
                <CustomSelect options={bankSelect} placeholder="Bank select" />
            </div>

            <ICTable
                loading={false}
                columns={columns}
                dataSource={PaymentTrack}
                pageSize={size}

                totalPages={PaymentTrack?.length}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={false}
            />
        </div>
    );
};

export default PayTrack;



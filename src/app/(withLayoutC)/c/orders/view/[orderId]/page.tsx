"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";
import { Button, Input, Select, SelectProps, Tag } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { BsCheck } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import selectImg from "../../../../../../../public/images/check-mark.png";
import OrderForm from "../../../OrderForm/page";

export default function OrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  const [status, setStatus] = useState("pending");
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const onSubmitForm = (value: FieldValues) => {};

  const handleChange = (value: string) => {
    setStatus(value);
  };

  return (
  <>
    <div className="flex min-h-[40vh] w-full flex-col items-center justify-center p-4 md:min-h-[60vh] md:p-6  2xl:p-10 ">
      <div className="mb-4 flex w-full items-center justify-end">
        <button
          onClick={() => router.back()}
          className="rounded-md bg-blue-500 px-3 py-1 text-[14px] text-white transition-all hover:bg-white hover:text-blue-600 hover:shadow-md"
        >
          Back
        </button>
      </div>
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold underline">
          {status === "pending"
            ? "Pending Order Page View"
            : status === "payment"
              ? "Payment Order Page View"
              : status === "wating"
                ? " Wating Order Page View"
                : status === "working"
                  ? " Working Order Page View"
                  : status === "complete"
                    ? " Complete Order Page View"
                    : status === "delivery"
                      ? " Delivery Order Page View"
                      : status === "cancelled"
                        ? " Cancelled Order Page View"
                        : "Pending Order Page View"}
        </h1>
        <div className="flex w-full items-center  justify-center gap-10">
          <div>
            {status === "pending" || status === "payment" ? (
              <Select
                className="py-2"
                // style={{ width: 120 }}
                // onChange={handleChange}
                defaultValue={"Only me"}
                options={[
                  { value: "Only me", label: "Only me" },
                  { value: "All sub admin", label: "All sub admin" },
                ]}
              />
            ) : (
              <Select
                className="py-2"
                // style={{ width: 120 }}
                // onChange={handleChange}
                defaultValue={"All sub admin"}
                options={[
                  { value: "All sub admin", label: "All sub admin" },
                  { value: "Only me", label: "Only me" },
                ]}
              />
            )}
          </div>

          <div className="flex items-center gap-10 text-slate-800">
            {status === "pending" ? (
              <>
                <div className="flex flex-col gap-2 ">
                  <span>Set Project Amount :</span>
                  <Input placeholder="$ Enter Amount" type="number" />
                </div>
                <div className="flex flex-col gap-2">
                  <span>Minimum Pay :</span>
                  <Input placeholder="$ Enter Amount" type="number" />
                </div>
              </>
            ) : status === "payment" ? (
              ""
            ) : status === "waiting" ? (
              <div className="flex flex-col gap-2 ">
                <span>Profile Set :</span>
                <Input placeholder="Profile Set.." type="text" />
              </div>
            ) : status === "working" ? (
              <div className="flex flex-col gap-2 ">
                <span>Project Documentation Uplode :</span>
                <Input placeholder="Enter Url.." type="text" />
              </div>
            ) : status === "complete" ? (
              ""
            ) : status === "delivery" ? (
              ""
            ) : status === "cancelled" ? (
              ""
            ) : (
              <>
                <button className="rounded-md bg-violet-500 px-5 py-1.5 text-white">
                  Set Project Amount
                </button>
                <button className="rounded-md bg-violet-500 px-5 py-1.5 text-white">
                  Minimum Pay
                </button>
              </>
            )}
            <Select
              className="py-2"
              style={{ width: 120 }}
              onChange={handleChange}
              placeholder={"Select Status"}
              options={[
                { value: "pending", label: "Pending" },
                { value: "payment", label: "Payment" },
                { value: "waiting", label: "Waiting" },
                { value: "working", label: "Working" },
                { value: "complete", label: "Complete" },
                { value: "delivery", label: "Delivery" },
                { value: "cancelled", label: "Cancelled" },
              ]}
            />
            <button className="h-10 w-24 rounded-md bg-green-700 px-5 py-1.5 text-white">
              Save
            </button>
          </div>
        </div>
        

      </div>
    </div>
    <OrderForm/>
  </>
  );
}

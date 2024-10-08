"use client";
import { Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { RiCheckFill, RiSearch2Line } from "react-icons/ri";
const SubsribesManuItems: React.FC = () => {
  const [AllCheckBox, setAllCheckBox] = useState<boolean>(false);
  const [AllCheckBox2, setAllCheckBox2] = useState<boolean>(false);
  const [AllCheckBox3, setAllCheckBox3] = useState<boolean>(false);
  const [AllCheckBox4, setAllCheckBox4] = useState<boolean>(false);

  const [checkbox1, setCheckBox1] = useState<boolean>(false);
  const [checkbox2, setCheckBox2] = useState<boolean>(false);
  const [checkbox3, setCheckBox3] = useState<boolean>(false);
  const [checkbox4, setCheckBox4] = useState<boolean>(false);
  const handelCheckAll = (): void => {
    setCheckBox1(!AllCheckBox);
    setAllCheckBox(!AllCheckBox);
  };
  const handelCheckAll2 = (): void => {
    setCheckBox2(!AllCheckBox2);
    setAllCheckBox2(!AllCheckBox2);
  };
  const handelCheckAll3 = (): void => {
    setCheckBox3(!AllCheckBox3);
    setAllCheckBox3(!AllCheckBox3);
  };
  const handelCheckAll4 = (): void => {
    setCheckBox4(!AllCheckBox4);
    setAllCheckBox4(!AllCheckBox4);
  };
  interface InitialState {
    id: number;
    name: string;
  }

  const [data, setData] = useState<InitialState[]>([
    { id: 1, name: "abc@gmail.com" },
    { id: 2, name: "abc@gmail.com" },
    { id: 3, name: "abc@gmail.com" },
  ]);
  const handleDelete = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="p-2">
      <div className="md:mb-16 my-5 text-center">
        <Form className="max-w-[700px]" style={{ margin: 'auto', borderRadius: "50px" }}>
          <Form.Item>
            <Input placeholder="Search" style={{ padding: "10px", borderRadius: "50px" }} />
            <span className="absolute right-5 top-1/2 -translate-y-1/2"><RiSearch2Line size={20} /></span>
          </Form.Item>
        </Form>
      </div>
      <div className="border-gray-500 mx-auto my-8 mr-1 gap-2 flex items-center w-full justify-between border border-none">
        <table className="border-gray-500 border bg-white flex-1">
          <thead className="w-full">
            <tr className="bg-blue-300 text-white  ">
              <th className="px-2 py-2 ">
              </th>
              <th className="px-1 py-2 flex items-center gap-2">
                <Checkbox />
                <RiCheckFill />
              </th>
              <th className="w-36  py-2 text-start">Email</th>
              <th className="w-fit px-2 py-2  ">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <TableRow />
          </tbody>
        </table>
        <table className="border-gray-500 border bg-white flex-1">
          <thead className="w-full">
            <tr className="bg-blue-300 text-white  ">
              <th className="px-2 py-2 ">
              </th>
              <th className="px-1 py-2 flex items-center gap-2">
                <Checkbox />
                <RiCheckFill />
              </th>
              <th className="w-36  py-2 text-start">Email</th>
              <th className="w-fit px-2 py-2  ">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <TableRow />
          </tbody>
        </table>
        <table className="border-gray-500 border bg-white flex-1">
          <thead className="w-full">
            <tr className="bg-blue-300 text-white  ">
              <th className="px-2 py-2 ">
              </th>
              <th className="px-1 py-2 flex items-center gap-2">
                <Checkbox />
                <RiCheckFill />
              </th>
              <th className="w-36  py-2 text-start">Email</th>
              <th className="w-fit px-2 py-2  ">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <TableRow />
          </tbody>
        </table>
        <table className="border-gray-500 border bg-white flex-1">
          <thead className="w-full">
            <tr className="bg-blue-300 text-white  ">
              <th className="px-2 py-2 ">
              </th>
              <th className="px-1 py-2 flex items-center gap-2">
                <Checkbox />
                <RiCheckFill />
              </th>
              <th className="w-36  py-2 text-start">Email</th>
              <th className="w-fit px-2 py-2  ">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <TableRow />
          </tbody>
        </table>

      </div>
    </div>
  );
};

export type Data = {
  id: number;
  name: string;
  isChecked: boolean;
};

const TableRow = () => {
  const [data, setData] = useState([
    { id: 1, name: "abc@gmail.com", isChecked: false },
    { id: 2, name: "abc@gmail.com", isChecked: false },
    { id: 3, name: "abc@gmail.com", isChecked: false },
  ]);
  const handleDelete = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleCheckbox = (id: number, isChecked: boolean) => {
    const targetId = data.find((data) => data.id === id);
    const restData = data.filter((data) => data.id !== id);

    setData([
      ...restData,
      {
        ...(targetId as Data),
        isChecked: isChecked,
      },
    ]);
  };

  return (
    <>
      {data.map((item, i) => (
        <tr key={i} className="bg-slate-200">
          <td className="border-gray-200 px-1 pr-3">{item.id}</td>

          <td className="border-gray-100 px-1 py-3">
            <input
              type="checkbox"
              className="h-6 w-5 p-2 "
              checked={item.isChecked}
              onChange={(e) => handleCheckbox(item.id, e.target.checked)}
            />{" "}
          </td>

          <td className="border-gray-100 px-1 py-2">{item.name}</td>

          <td className="px-1 flex border-gray-100 cursor-pointer items-center justify-center text-red gap-2  py-2">
            <BiTrash
              size={35}
              className="text-red-700"
              onClick={() => handleDelete(item.id)}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default SubsribesManuItems;

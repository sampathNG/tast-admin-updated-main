import React from "react";
import CustomSearch from "../CustomSearch";
import { BiTrash } from "react-icons/bi";
import { Button, Form, Input } from "antd";
import { RiSearch2Line } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";

const ContactUsDropDownTable: React.FC = () => {
  const onSearch = () => { };
  return (
    <section className="mt-3 space-y-5">
      <div className="my-10 text-center lg:h-[200px]">
        <Form className="max-w-[700px]" style={{ margin: 'auto', borderRadius: "50px" }}>
          <Form.Item>
            <Input placeholder="Search" style={{ padding: "10px", borderRadius: "50px" }} />
            <span className="absolute right-5 top-1/2 -translate-y-1/2"><RiSearch2Line size={20} /></span>
          </Form.Item>
        </Form>
      </div>
      <table className="border-gray-500 my-8 mr-1 table   w-full border ">
        <thead>
          <tr className="bg-blue-400 text-white ">
            <th className="border-2 px-4  py-2">No</th>
            <th className="w-fit border-2 px-1  py-2">User ID</th>
            <th className="w-fit border-2 px-1  py-2">User Name</th>
            <th className="border-2 px-1   py-2">Contact Details</th>
            <th className="w-fit border-2 px-20  py-2">Subject Name</th>
            <th className="border-2   px-44 py-2">Message</th>
            <th className="border-2 px-5 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-200">
            <td className="border-gray-100 border-2 px-4 py-3">45</td>
            <td className="border-gray-100 border-2 px-4 py-2">54Lpl </td>
            <td className="border-gray-100 border-2 px-4 py-2">Mr Dani</td>
            <td className="border-gray-100 border-2 px-4 py-2">
              abc@gmail.com
            </td>
            <td className="border-gray-100 border-2 px-4 py-2">
              Payment Issue
            </td>
            <td className="border-gray-100 border-2 px-4 py-2">
              Can you help me
            </td>
            <td className="border-gray-100 border-2 px-6 py-4 text-center">
              <BiTrash className="h-6 w-6 cursor-pointer text-rose-500" />
            </td>
          </tr>

          {/* Just for Demo  Displaying  Remove Follwing Code  */}
          <tr className="bg-slate-200">
            <td className="border-gray-100 border-2 px-4 py-3">45</td>
            <td className="border-gray-100 border-2 px-4 py-2">54Lpl </td>
            <td className="border-gray-100 border-2 px-4 py-2">Mr Jon</td>
            <td className="border-gray-100 border-2 px-4 py-2">
              abc@gmail.com
            </td>
            <td className="border-gray-100 border-2 px-4 py-2">Payment Loss</td>
            <td className="border-gray-100 border-2 px-4 py-2">
              Can you help me....
            </td>
            <td className="border-gray-100 border-2 px-6 py-4 text-center">
              <BiTrash className="h-6 w-6 cursor-pointer text-rose-500" />
            </td>
          </tr>
          {/* Just for Demo  Displaying  Remove Upper Code  */}
        </tbody>
      </table>
      <div className="text-center pt-10 md:pt-20">
        <h4 className="font-bold text-black">Showing 1 to 5 of 97 results</h4>
        <div className="flex items-center w-fit border rounded-full px-1 mx-auto mt-2">
          <Button style={{ border: 0, background: "transparent" }}><FaArrowDown size={30} color="#FFB200" /></Button>
          <h3 className="py-4 bg-[#172554] px-1 text-white font-bold">Show More Results</h3>
          <Button style={{ border: 0, background: "transparent" }}><FaArrowDown color="#FFB200" size={30} /></Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsDropDownTable;

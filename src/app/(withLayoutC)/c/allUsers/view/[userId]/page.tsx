// src/components/Page/Page.tsx
import React from 'react';
import Image from 'next/image';
import Details from "@/components/Details/Details";
import NavLink from "@/components/NavLink/NavLink";
import { FaUserAlt } from 'react-icons/fa';
import { RiReceiptFill } from 'react-icons/ri';
import { MdPayments } from 'react-icons/md';
import { IoSettings } from 'react-icons/io5';
import ModalLayout from "../../../../../../components/Modal/ModalLayout";

interface PageProps {
  params: {
    userId: string;
    userName: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <ModalLayout>
      <div className="flex justify-between max-w-[1000px] mx-auto mt-3">
        <h1>My Page {params?.userId}</h1>
        <select className="select select-ghost w-20">
          <option>Status</option>
          <option>Active</option>
          <option>Block</option>
        </select>
        <button className="text-white bg-purple-600 px-5 py-2 border-2 rounded-full border-purple-800">Save</button>
      </div>
      <section className="rounded-xl py-5 px-6">
        <div className="flex justify-between">
          <Sidebar />
          <div className="bg-[#F2E6C9] p-6">
            <header className="flex justify-between items-end mb-4">
              <div className="flex items-end gap-x-4">
                <div className="h-16 w-16 rounded-full border items-center border-black">
                  <Image alt="profile" src="/images/user/Ellipse 1.png" className="flex justify-center" width={62} height={62} />
                </div>
                <div>
                  <h3 className="font-semibold">Mr. Jack</h3>
                  <p className="text-sm">Username: Jack1542</p>
                </div>
              </div>
            </header>
            <main className="flex gap-x-2 items-start">
              <section className="bg-white w-1/2 rounded-lg py-4">
                <h2 className="text-xl font-semibold mb-4 text-center">Personal Information</h2>
                <Details label="Full Name" data="jack" />
                <Details label="Occupation" data="Student" />
                <Details label="Speaking Language" data="English" />
                <Details label="Date of Birth" data="02-03-2024" />
                <Details label="National Identification Number/Passport Number" data="466566556" />
                <Details label="Present Address" data="canada.sudo.UF46.NST" />
                <Details label="Permanent Address" data="canada.sudo.UF46.NST" />
                <Details label="Phone No" data="+44 56412646" />
                <Details label="Email " data="abc@gmail.com" />
              </section>
              <section className="w-1/2 grid gap-y-2">
                <section className="bg-white rounded-lg py-4">
                  <h2 className="text-xl font-semibold mb-4 text-center">Company Information</h2>
                  <Details label="Company Name" data="tast.LTD" />
                  <Details label="Phone No." data="+1466644661" />
                  <Details label="Email" data="abc@gmail.com" />
                  <Details label="Website Url" data="www.abc.com" />
                </section>
                <section className="bg-white rounded-lg py-4">
                  <h2 className="text-xl font-semibold mb-4 text-center">Social Links</h2>
                  <div className="flex justify-center gap-x-4">
                    <div className="h-10 w-10 border rounded-full border-black"></div>
                    <div className="h-10 w-10 border rounded-full border-black"></div>
                    <div className="h-10 w-10 border rounded-full border-black"></div>
                    <div className="h-10 w-10 border rounded-full border-black"></div>
                  </div>
                </section>
              </section>
            </main>
          </div>
        </div>
      </section>
    </ModalLayout>
  );
};

export default Page;

const Sidebar: React.FC = () => {
  const active = "bg-[#FFB200] text-black font-bold";

  return (
    <aside className="h-full bg-white p-4">
      <header className="flex justify-between items-end mb-4">
        <div className="flex items-end gap-x-4">
          <div className="h-16 w-16 rounded-full border items-center border-black">
            <Image alt="profile" src="/images/user/user-01.png" className="flex justify-center" width={62} height={62} />
          </div>
          <div>
            <h3 className="font-semibold">Mr. Jack</h3>
            <p className="text-sm">Username: Jack1542</p>
          </div>
        </div>
      </header>
      <ul className="flex flex-col gap-y-2 px-4">
        <li>
          <NavLink to={`/c/allUsers/view/`} active={active} className="sidebar">
            <div className="flex items-center gap-2"><FaUserAlt /> Profile</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/c/allUsers/view/orders`} active={active} className="sidebar">
            <div className="flex items-center gap-2"><RiReceiptFill /> Order</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/c/allUsers/view/online-payment`} active={active} className="sidebar">
            <div className="flex items-center gap-2"><MdPayments /> Payment</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/c/allUsers/view/refund-payment`} active={active} className="sidebar">
            <div className="flex items-center gap-2"><MdPayments /> Refund Payment</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/c/allUsers/view/settings`} active={active} className="sidebar">
            <div className="flex items-center gap-2"><IoSettings /> Settings</div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

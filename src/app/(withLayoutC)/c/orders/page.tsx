"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { OrderData } from "@/types/orderData";
import Link from "next/link";
import { OrdersData } from "@/constants/orderData";
import ICTable from "@/components/ui/ICTable";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomSearch from "@/components/ui/CustomSearch";
import { DatePicker, Input } from "antd";
import Image from "next/image";
import { IoClose, IoSearch } from "react-icons/io5";
import { VscChromeMinimize } from "react-icons/vsc";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Card from "../../../../components/Card/Card";



const cardTitles = [
  "Total Orders",
  "Total Pending Orders",
  "Total Payment Orders",
  "Total Waiting Orders",
  "Total Working Orders",
  "Total Complete Orders",
  "Total Delivery Orders",
  "Total Cancel Orders",
  "Total Profit Amount",
  "Total Pay Amount",
  "Total Money Left",
];

const Chats = [
  {
    role: "sender",
    message: "Hello",
  },
  {
    role: "you",
    message: "Hi",
  },
  {
    role: "sender",
    message: "How are you?",
  },
  {
    role: "you",
    message: "Good",
  },
  {
    role: "sender",
    message: "Okey",
  },
];

const UserImg =
  "https://s3-alpha-sig.figma.com/img/880c/b967/a11c7be2f51928dfc76dc15828fbf03f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUjm3IMAGAAGPPh4gBNiRn0U48bqHeSiYPnBCwtQftJ4U9g0g1kV1z3YsthXtK8TeFSi4ZrDqCpkBb-mqFWnHSMPH3idI57Z3fiKFP5Q-ZoeGqzOIaUK0egd-6AmrmsfpbwqN7j6Qk3RTR6EXjzHVfPWcmzJpKZ1WvB2JjEJe3EdEOFbQxa~eucVyn7dmzBk3nFFh70E3OgZcX9Yoy46fSRoT2MSzj3-WqyvNTjRCkdn~N~~8iCviu2qjPCUDyoSIDn74680qY3QKtZ7TwJyaH94uBC2esI1C4edUoYcQ4S-8evaZpZOFLYkkTq6IGaTPjO~hnin5KQtVuPEscLMKw__";
const CallImg =
  "https://s3-alpha-sig.figma.com/img/624f/871d/45260d905371dea61ba160316d35b90f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5EJ9ZWAtvuTd-pRdvcFi44AtiXjfOUGHvLK8jqEB7ZyiYPd9pUbF-zvSwmfQmf5Et-bWqTYFpZ-kZRN4oHlW0~HFtPAp3o32x8tSF3tq2Q4MUBM7l0jPRRigtxwDhw78doglUopNFf2j6pmdmhHfHrV6ni~eriPjNGTKvfxS9peUyDE1eWzBGr5cRIKB-BNMjlJHDTeuQxRrQxG22730FWvx8G2vf~E46VTCj2Ea-b5uHM9~QOPCBdBKPkImAVn47oPF8DNLYMZlvL6S6S9jjPOSSMU427SNl8oXjmAcIK9CH-LL42c7Pb7p8VNJSE3d4FK2gc4wokSyx9hrvIkoQ__";

const SettingImg =
  "https://s3-alpha-sig.figma.com/img/9801/9810/595295091f5ec9a38dac6a413fa25d44?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eZlxH0CmJ8Xgxcz84Dvh4HofwmdIEqYU2QeticWwMi7EKl0jxjBdRGcWdU543Y1fWGtzC8SHnduUu6sCeaD0KE9-tdf1mtgc54FWiVhVZ1Wx5vabnRb8x9Mqa5CFR0Xtz9r2Symn37YNd3BBbkweiHKpVXXpRi7oQkx9IAascgglsUeN~JwXSy17BAVmGnnpqyGB2tKHZZ-KaiD~zIKN3qP~8EV3xRSNvlEuQhz15~Scz1t9nsMEr7m3Pu7SeJTNmDpGvfqtm4kfAtQsGNIX4UUpmjsyYv~syphD7RMlMxFQj1cH4lwKAUIHarz3UDagpLfOOi0N7dmc7RcpDbA6jw__";

const uplodeImg =
  "https://s3-alpha-sig.figma.com/img/1f47/ffa3/2c8ba17913110f01c196cd58628d7dbf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzFznPgk4VmJsJWUyy4XOJ7iGRsYS5r~iQBaDnZfO3kBUzqgsbTn3maWrHgQMLDk72OP8UpCDoaYOjVXZLcctx0JZEZ1tNJyOge~ZDpTbRhhW9yFlfHlJsMIuThqogXG6wJbKP9y~2RWNp4BKncOVy~Ea1TwaPicJCIRK~6ToegE4TPMsTCV6JfhJVHPYH~eO0JUwvnBjNMrxufJQjKR-T~qZKHYm~hw3zUJw2SPU74dzYaIoR9emlMfdzFg8aywBize2J4GyVUXQGIa8w7WIoTnYmseCNhsuhKs-20K94LzV3N3XqQKQzUjoVaGjPVYxVuflcdf3kg8znqN6uRbAA__";

const micImg =
  "https://s3-alpha-sig.figma.com/img/af8f/ca79/c89fe2faf4acf520e359d8e7b284a5af?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDoG5F-iHGgXDtwo~a1nWCQ-oLaTMv5NgwTacEhXNiTNphTw60wwq5m4WwWwU0KZaKO5tkpUOWwDF2UIpu-oI6TkJZyVb10ZmhWVyh6c9BVkDl-8Sy84twqC4dGvmNZrImYeKWjoraZpCFhTEXfAokfo-JYWVJA1-hvkL~MNF9Do6JEn985UMemxBdheugqBAtrgZb55t3BSAipzUkLVaS-Dg6qJkXYNTNxUxQJs941mXqoQ65teAxnZG4SfAUVV0aLFe-lrbu5JWQgQBnxD7WIAWgLWZmtyoxTd0XBkkDhj7sdlfyHVbe7mdv3BWFX9~HXz8yMg7CfUJ0ISFI0THA__";

const sendImg =
  "https://s3-alpha-sig.figma.com/img/d8a6/8b6d/1b543b866ac384f9b25e25687422c02a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWwLFQHN2qYgzbT9~-urJvP8l473nULswLGWWMFPkEeObr5DZQNwsvbwOjwpMdgXpvW~1X-UgTlRvY3yr4~rZy6VaQEtnT0CRQ7-pu6dSOLVEHb7W3u9cN3AJaGYDqg3qjqYV-CS00EYbCsNOpIw9s7~gTPYa0HQrWcF4Nl7dYUxuWyIM8tqTtb~JkqhJIZMHaKFa0urJRRZKNosWFxM8s652sPfH6SgTfrHLehQG3me-vdB4hSOOlk-90R9Z44Ckf8j~B7Z9CI-e~hNgXsZFTsEQd5Ky8YpnBrSQoTZDgomtsNHGmNnFzrSNV8DKP8lbe0kPlv6aRrLnuNKYXeQ5Q__";

const endCallImg =
  "https://s3-alpha-sig.figma.com/img/a372/37eb/0e32f3dcf2380391826895c640315452?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pXakADlN9DsD61m8DTjA~AgA312cz~Otc5mx6iSxlGredeppwHUmtg20uqg~PfhJlPxJ1kZ0HEYj4KCQB-QqzeldZKyGyETzcodysXVKzof-cKB7LBy~KzbmsszCHzczyL9MBbWmcR9r-o9JqdSH7GPkxprHzn8NE52dtDHIbAtMy8Ly5GLCDm9Qg0KW4x5UiVAb9kbJU4b~9ql47jLJeqmzhsRvyUsU6XyuQCdeoYD7E68v45HTDlaVYFoayRp7h4y5bvjK-9bN837qZDHlAKF26LdPXMFFwWQJ549eM7ailXJkObIsd8VFJFK5W3J4MoL4sHvjizZ2vFwQqWwgpw__";

const speakerImg =
  "https://s3-alpha-sig.figma.com/img/069d/0da1/dcf117916f2b0317956b5fbcca67acc6?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXa5IfbZq08WIM50peXvJeywddt1Ey1m00ddybcVFxIw7FtwW4GRDCvZ2yocqTK6Ao8ExKamQrx9AqLPCEBAbesDU1RerCfbqqiwtD7GXh53EAko9NgYb2HE-JxEweQ9ZBGbYW72Zsy6aOvHQ4PeyLlkZ3YIa8-UUbpyLCdmxTWwBJUMx5MCnZ6foR8PNGwYffid52fNHNQ9XFXfdB8rGhOvvo9EK8fTqTmezouTKjf~YhkiGG7QSSDR~WsLIDi71LRomOEwtvinU12vogCPcOES39075MCi1pS8doHpUS54NCgpak~AsM725uswUxy-YJT5VIVy~P6q7OiVz0CQLA__";
const recordImg =
  "https://s3-alpha-sig.figma.com/img/78a4/db6a/cf6505fcd094931f96bc9d0bd272c4af?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMpx8SvvzWbbXLDRZ03CuMfx0Z9WwqyJ5DHqaQPUr5G-jxXrYLa4VO-~4NIhioQxyQMO-oN5ICVscHdESy0MwQWlZQb0dudhQFaO8kV5ThAGgdvu1-Ez-zVIWF8qSHg7JkBd1iMyGXZR-JAfnbm2gyGVrjtahr7szBOKhqt~Zr1QgVEHnRovRmMyMgzaboXvwoIBi3PH47ub6h5ujH-F-wH6odnj4OswJsidgAFKH9G13YpsoCMVm-~2ubLI33ujnG-x5f~u-qs3JFGu3p-j-ORLXY5YbYVxoI21Elhdrz2kQpNIC6VOJqn6b9pmybR50ZWSwamCxZTDHjHptERwyg__";
const { Search } = Input;

const AllOrders: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const statusColors: { [key: string]: string } = {
    Pending: 'bg-red',
    Payment: 'bg-yellow-600',
    Waiting: 'bg-blue-400',
    Working: 'bg-orange-700',
    Completed: 'bg-green-500',
    Delivery: 'bg-green-800',
    Cancel: 'bg-rose-800',
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
    { title: "Order Id", dataIndex: "id" },
    { title: "Project Name", dataIndex: "projectName" },
    { title: "Project Amount", dataIndex: "projectAmount" },
    { title: "Paid Amount", dataIndex: "totalPaidAmount" },
    { title: "Left Amount", dataIndex: "moneyLeft" },
    {
      title: "Chat",
      render: (data: OrderData) => {
        return <UpdateConversation />;
      },
    },
    { title: "Delivery Date", dataIndex: "projectDeliveryDay" },
    { title: "Profits", dataIndex: "profit" },
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
      render: (data: OrderData) => {
        return (
          <span>
            <Link href={`/c/orders/view/${data?.id}`}>
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

  const projectStatusOption = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Pending",
      label: "Pending",
    },
    {
      value: "Payment",
      label: "Payment",
    },
    {
      value: "Waiting",
      label: "Waiting",
    },
    {
      value: "Working",
      label: "Working",
    },
    {
      value: "Complete",
      label: "Complete",
    },
    {
      value: "Delivery",
      label: "Delivery",
    },
    {
      value: "Cancel",
      label: "Cancel",
    },
  ];
  const status = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "normal",
      label: "normal",
    },
    {
      value: "medium",
      label: "medium",
    },
    {
      value: "emergency",
      label: "emergency",
    },
  ];
  const country = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "japan",
      label: "japan",
    },
    {
      value: "london",
      label: "london",
    },
  ];
  const projectName = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "web dev",
      label: "web dev",
    },
    {
      value: "app dev",
      label: "app dev",
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
  const props = {
    className: "bg-blue-500 w-full",
    placeholder: "Search Blogs",
    loading: false,
    onSearch: onSearch,
    enterButton: true,
  };
  return (
    <div className="z-0 w-full p-4 md:p-6 2xl:p-10 ">
      <Breadcrumb pageName="All Orders" />
      <div className="rounded-xl py-5 px-6">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 h-fit gap-3 mb-3">
          {cardTitles.map((title, i) => (
            <Card title={title} key={i} />
          ))}
        </div>
      </div>
      <div className="grid w-full  grid-cols-1 items-center justify-between gap-3 py-4 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex gap-2 mr-5">
          show
          <select className="select select-ghost w-fit">
            <option disabled>15</option>
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
        <div className="flex gap-2">
          <CustomSelect options={status} placeholder="Type" />
          <CustomSelect options={country} placeholder="Country" />
        </div>

        <CustomSearch onSearch={onSearch} />
        <div className="col-span-2 flex items-center justify-center gap-2">
          <DatePicker onChange={onStartDate} />
          <span>To</span>
          <DatePicker onChange={onStartDate} />
          <CustomSelect options={projectName} placeholder="Service Name" />
          <CustomSelect options={projectStatusOption} placeholder="Status" />

        </div>
      </div>

      <div className="w-full overflow-x-scroll">
        <ICTable
          loading={false}
          columns={columns}
          dataSource={OrdersData}
          pageSize={size}
          totalPages={OrdersData?.length}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
    </div>
  );
};

const UpdateConversation = () => {
  const [isShowChats, setIsShowChats] = useState(false);
  const [isCallPopUp, setICallPopUp] = useState(false);
  const [isSettingOn, setIsSettingOn] = useState(false);
  const [minimise, setMinimise] = useState(false);
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsShowChats(!isShowChats)}
          className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-white  transition-all hover:bg-white hover:text-blue-600 hover:shadow-md "
        >
          Message
        </button>
        {isShowChats && (
          <div className="max:h-[500px] absolute right-0 top-0 z-9999 w-[300px] rounded-xl bg-[#9AC4CD] p-2">
            <div className="relative">
              {/* close */}
              <div className="absolute -right-7 -top-7 flex flex-col items-center gap-2 text-xl font-bold">
                <span className="rounded-full bg-slate-200 p-1">
                  <IoClose
                    className="cursor-pointer text-meta-1"
                    onClick={() => setIsShowChats(false)}
                  />
                </span>
                <span className="rounded-full bg-slate-200 p-1">
                  <VscChromeMinimize className="cursor-pointer text-meta-5" />
                </span>
              </div>
              {/* top */}
              <div className="flex items-center justify-between rounded-full bg-blue-300 p-1">
                <div className="flex items-center gap-1 font-semibold">
                  <Image src={UserImg} height={40} width={40} alt="user" />
                  <span>Md Kazol</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    onClick={() => setICallPopUp(true)}
                    src={CallImg}
                    height={30}
                    width={30}
                    alt="call"
                  />
                  <Image
                    onClick={() => setIsSettingOn(!isSettingOn)}
                    src={SettingImg}
                    height={30}
                    width={30}
                    alt="setting"
                  />
                </div>
              </div>
              {/* chat */}
              <div className="max-h-[300px] min-h-[250px] space-y-2 overflow-y-scroll px-3 py-5 text-white">
                {Chats.map((chat, index) =>
                  chat.role === "you" ? (
                    <ChatLineYou key={index} chat={chat} />
                  ) : (
                    <ChatLineSender chat={chat} key={index} />
                  ),
                )}
                {Chats.map((chat, index) =>
                  chat.role === "you" ? (
                    <ChatLineYou key={index} chat={chat} />
                  ) : (
                    <ChatLineSender chat={chat} key={index} />
                  ),
                )}
                {Chats.map((chat, index) =>
                  chat.role === "you" ? (
                    <ChatLineYou key={index} chat={chat} />
                  ) : (
                    <ChatLineSender chat={chat} key={index} />
                  ),
                )}
              </div>
              {/* Bottom */}
              <div className="flex items-center gap-1 rounded-full px-3 py-2">
                <Image
                  src={uplodeImg}
                  height={30}
                  width={30}
                  alt="setting"
                  className="cursor-pointer"
                />
                <Image
                  src={micImg}
                  height={30}
                  width={30}
                  alt="setting"
                  className="cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="Enter a message"
                  className="w-2/3 rounded-full bg-slate-500 px-2 py-1 text-white outline-none"
                />
                <Image
                  src={sendImg}
                  height={30}
                  width={30}
                  alt="setting"
                  className="cursor-pointer"
                />
              </div>

              {isSettingOn && <ChatSettings />}
            </div>
          </div>
        )}
        {minimise && (
          <div
            onClick={() => [setICallPopUp(true), setMinimise(false)]}
            className="fixed bottom-5 right-2 z-40 cursor-pointer"
          >
            <Image src={UserImg} height={70} width={70} alt="user" />
          </div>
        )}
      </div>
      {isCallPopUp && (
        <CallPopUp
          isCallPopUp={isCallPopUp}
          setICallPopUp={setICallPopUp}
          setMinimise={setMinimise}
        />
      )}
    </>
  );
};

const ChatLineYou = ({ chat }: { chat: { role: string; message: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex items-center justify-end gap-1">
      <span className="relative">
        <HiOutlineDotsVertical
          className="text-slate-600 "
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-0 z-20 flex flex-col space-y-3 bg-white px-3 py-2 text-slate-600"
          >
            <span className="cursor-pointer">Copy</span>
            <span className="cursor-pointer">Delete</span>
          </div>
        )}
      </span>
      <span className="rounded-md bg-blue-600 p-1">{chat.message}</span>
    </div>
  );
};

const ChatLineSender = ({
  chat,
}: {
  chat: { role: string; message: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-start gap-1">
      <Image src={UserImg} height={30} width={30} alt="user" />
      <span className="rounded-md bg-blue-600 p-1">{chat.message}</span>
      <span className="relative">
        <HiOutlineDotsVertical
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-600"
        />
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="absolute left-5 top-0 z-20 flex flex-col space-y-3 bg-white px-3 py-2 text-slate-600"
          >
            <span className="cursor-pointer">Copy</span>
            <span className="cursor-pointer">Delete</span>
          </div>
        )}
      </span>
    </div>
  );
};

const CallPopUp = ({
  isCallPopUp,
  setICallPopUp,
  setMinimise,
}: {
  isCallPopUp: boolean;
  setICallPopUp: any;
  setMinimise: any;
}) => {
  return (
    <div className="absolute -left-125 top-5  rounded-xl bg-blue-300 p-5 z-30">
      <div className="relative flex min-h-[250px] min-w-[200px] flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src={UserImg} height={60} width={60} alt="user" />
          <h2 className="text-xl font-semibold">Md Kazol</h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image src={micImg} height={40} width={40} alt="user" />
          <Image src={recordImg} height={40} width={40} alt="user" />
          <Image
            onClick={() => setICallPopUp(false)}
            src={endCallImg}
            height={40}
            width={40}
            alt="user"
          />
          <Image src={speakerImg} height={40} width={40} alt="user" />
        </div>
        <span
          onClick={() => [setICallPopUp(false), setMinimise(true)]}
          className="absolute right-0 top-0 rounded-full bg-white p-2"
        >
          <VscChromeMinimize className="cursor-pointer text-meta-5" />
        </span>
      </div>
    </div>
  );
};

const ChatSettings = () => {
  const [isDeletePopUp, setIsDeletePopUp] = useState(false);
  return (
    <div className="absolute right-0 top-10 z-9999 rounded-xl bg-white px-5 py-2 text-slate-400 dark:bg-black">
      <div className="flex items-center justify-between gap-4">
        <span>Can not Message</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
        </label>
      </div>
      <div className="flex items-center justify-between">
        <span>Incoming Call</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
        </label>
      </div>
      <div className="flex items-center justify-between">
        <span>Notification</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
        </label>
      </div>
      <div className="flex items-center justify-between">
        <span>Block</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
        </label>
      </div>
      <div className="relative flex items-center justify-between">
        <span>Clear Data</span>
        <MdDelete
          onClick={() => setIsDeletePopUp(!isDeletePopUp)}
          className="text-meta-1"
          size={20}
        />
        {isDeletePopUp && (
          <div className="absolute right-0 top-10 z-99999 w-[200px] rounded-xl bg-slate-800 px-5 py-2 text-slate-400">
            <div className="flex items-center justify-between gap-4">
              <span>24 Hours After</span>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
              </label>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>7 Day After</span>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
              </label>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>30 Day After</span>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
              </label>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>90 Day After</span>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
              </label>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Off</span>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="peer h-3 w-7 rounded-full bg-slate-200 after:absolute after:start-[7px] after:top-[2px] after:h-2 after:w-2 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllOrders;

import React, { useRef, useState } from "react";
import { FiSave } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import dynamic from "next/dynamic";
import { Button, Form, Input, Space, Switch } from "antd";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
// import "jodit/build/jodit.min.css";
const InfaomationTechnology: React.FC = () => {
  const Editor = useRef(null);

  const [content, setContent] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState<any>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [showConfirmation, setShowConfirmatin] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [uploadSucces, setUploadSuccess] = useState(false);

  const handleSuccesPopup = () => {
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e?.target.value);
  };

  const handleAddData = () => {
    if (inputValue.trim() !== "") {
      setDataList([...dataList, inputValue]);
      setInputValue("");
    }
  };

  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      setIsChecked(!isChecked);
    }
    setShowConfirmatin(false);
  };

  const handleCheckboxChange = () => {
    if (isChecked) {
      setIsChecked(!isChecked);
    } else {
      setShowConfirmatin(true);
    }
  };

  const handleDelete = (index: number) => {
    setDeleteIndex(index);
  };
  const confirmationDelete = () => {
    if (deleteIndex !== null) {
      setDataList((prevDataList: any) =>
        prevDataList.filter((_: any, index: number) => index !== deleteIndex),
      );
      setDeleteIndex(null);
    }
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
  };
  const config = {
    height: 600,
  };
  return (
    <div className="flex gap-2">
      <div className="min-w-[200px] bg-[#D1CCCC] p-3">
        <div className="flex flex-col gap-4">
          <Form className="flex flex-col gap-4">
            <Space.Compact>
              <Form.Item
                name={["search-field"]}
                noStyle
                rules={[{ required: true, message: "Province is required" }]}
              >
                <Input style={{ padding: "10px", width: "100%" }} />
              </Form.Item>
              <Form.Item noStyle>
                <Button
                  style={{
                    background: "#D9D9D9",
                    border: "0",
                    display: "flex",
                    alignItems: "center",
                    padding: "25px",
                  }}
                >
                  Add
                </Button>
              </Form.Item>
            </Space.Compact>
            <Space.Compact>
              <Form.Item
                name={["search-field"]}
                noStyle
                rules={[{ required: true, message: "Province is required" }]}
              >
                <Input style={{ padding: "10px", width: "100%", background: "#D9D9D9", }} />
              </Form.Item>
              <Form.Item noStyle>
                <div className="flex items-center bg-[#D9D9D9] gap-0">
                  <Switch defaultChecked />
                  <Button style={{
                    border: "0", display: "flex", alignItems: "center", padding: "", background: "#D9D9D9"
                  }}>
                    Add
                  </Button>
                </div>
              </Form.Item>
            </Space.Compact>

          </Form>
        </div>
      </div>
      <div className="flex-1 md:h-screen">
        <div className=" mt-5 ">

          <div className="mt-6">
            {dataList.map((item: any, index: number) => (
              <div
                key={index}
                className="mb-2 flex justify-between rounded bg-slate-200 p-2"
              >
                {item}
                <span className="flex gap-1">
                  <button
                    className="rounded bg-rose-500 p-1"
                    onClick={() => handleDelete(index)}
                  >
                    <BiTrash size={25} />
                  </button>
                  <label className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="sr-only"
                      />
                      <div
                        className={`box block h-8 w-14 rounded-full ${isChecked ? "bg-green-500" : "bg-slate-300"
                          }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center  rounded-full bg-white  transition ${isChecked ? "translate-x-full" : ""
                          }`}
                      ></div>
                    </div>
                  </label>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="">
            <h2 className="my-4 text-center text-xl md:text-2xl lg:text-3xl font-bold text-black">Information Techonolgy </h2>
            <form action="" className="relative">
              <div className="absolute -top-10 right-5 flex items-center gap-3">
                {/* <FaEdit className="text-green-600" size={36} /> */}
                <FiSave
                  type="submit"
                  className="cursor-pointer text-blue-600"
                  size={36}
                  onClick={handleSuccesPopup}
                />
              </div>
              <span className="w-[1000px]">
                <label className="text-md py-5 ">Description</label>
                <JoditEditor
                  ref={Editor}
                  value={content}
                  config={{
                    height: 600,
                  }}
                  onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                />
              </span>
            </form>
          </div>
        </div>
        {showConfirmation && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p>Arue you sure to tooggle the checkbox?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                  onClick={() => handleConfirmation(true)}
                >
                  Yes
                </button>
                <button
                  className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                  onClick={() => handleConfirmation(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {deleteIndex !== null && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p>Arue you sure to delete this item?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                  onClick={confirmationDelete}
                >
                  Yes
                </button>
                <button
                  className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                  onClick={cancelDelete}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* succes pop */}
        {uploadSucces && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p className="px-20 py-20 text-green-500">Successfully Save</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfaomationTechnology;




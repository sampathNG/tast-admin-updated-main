import React, { useState, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line, RiDragDropFill, RiSearch2Line } from "react-icons/ri";
import { MdCloudUpload } from "react-icons/md";
import { GlobState } from "../MergedComponents/CreateGlobalLocations";
import Image from "next/image";
import { Button, Form, Input, Select } from "antd";
import { FaArrowDown, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
interface GlobProps {
  data: GlobState[];
  setGlobalLocations: React.Dispatch<React.SetStateAction<GlobState[]>>;
  onEditClick: (index: number) => void;
}
const GlobalLocations: React.FC<GlobProps> = ({
  data,
  setGlobalLocations,
  onEditClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [isDeleteItem, setIsDeleteItems] = useState(false);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [isChecked, setIsChecked] = useState(false);
  const [isMessageSaved, setIsMessageSaved] = useState(false);
  const [showConfirmation, setShowConfirmatin] = useState(false);
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const [draggedRow, setDraggedRow] = useState<number | null>(null);
  // update hooks
  const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false);
  const [isUpdateMode, setIsupdateMode] = useState(false);
  const [updateIndex, setUpdateIndex] = useState<any>(null);
  // delete recor hooks
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<any>();

  const handleDrageStart = (
    e: React.DragEvent<HTMLTableRowElement>,
    index: any,
  ) => {
    setDraggedRow(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", index);
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLTableRowElement>,
    index: number,
  ) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent<HTMLTableRowElement>,
    index: number,
  ) => {
    e.preventDefault();
    const draggedRowIndex = Number(e.dataTransfer.getData("text/html"));
    const newTableData = [...tableData];
    const draggedRowData = newTableData[draggedRowIndex];

    newTableData.splice(draggedRowIndex, 1);
    newTableData.splice(index, 0, draggedRowData);
    setTableData(newTableData);
    setDraggedRow(null);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState({
    feild: "",
    feild2: "",
    feild3: "",
    image: "",
  });
  const [tableData, setTableData] = useState<any>([]);

  const handleConfirmation = (confirmed: Boolean) => {
    if (confirmed) {
      setIsChecked(!isChecked);
    }
    setShowConfirmatin(false);
  };

  const handleCheckboxChange = (): void => {
    if (isChecked) {
      setIsChecked(!isChecked);
    } else {
      setShowConfirmatin(true);
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteClick = (itemId: number) => {
    setIsDeleteItems(true);
    setDeleteIndex(itemId);
  };

  const handleDeleteConfirm = () => {
    setGlobalLocations((prevGlobalLocations: any) =>
      prevGlobalLocations.filter((item: any) => item.id !== deleteIndex),
    );
    setIsDeleteItems(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    const imageFile = selectedFiles?.[0];
    if (imageFile) {
      setInputValue((prevValues) => ({
        ...prevValues,
        image: URL.createObjectURL(imageFile),
      }));
    }
  };

  const handleInputChange = (feildName: string, value: string) => {
    // const mexLength = feildName ==='feild1' ? 12 : 14;

    // const truncatedValue = value.slice(0, mexLength);

    setInputValue((prevValues) => ({
      ...prevValues,
      [feildName]: value,
    }));
  };

  const handleButtonClickInput = () => {
    if (isUpdateMode) {
      handleUpdateSubmit();
    } else {
      setTableData((prevData: any) => [...prevData, { ...inputValue }]);
      // for Clear input values
      setInputValue({
        feild: "",
        feild2: "",
        feild3: "",
        image: "",
      });
    }
  };

  const handleButtonImge = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setInputValue((prevValues: any) => ({
      ...prevValues,
      image: null,
    }));
    setShowRemoveConfirmation(false);
  };

  const handleRemoveConfirmation = () => {
    setShowRemoveConfirmation(true);
  };

  // updateData
  const handleUpdate = (index: number) => {
    setInputValue(tableData[index]);
    setIsupdateMode(true);
    setUpdateIndex(index);
  };

  const handleUpdateSubmit = () => {
    setShowUpdateConfirmation(true);
  };
  const confirmUpdate = () => {
    setTableData((prevData: any) => {
      const newData = [...prevData];
      newData[updateIndex] = { ...inputValue };
      return newData;
    });
    setInputValue({
      feild: "",
      feild2: "",
      feild3: "",
      image: "",
    });
    setIsupdateMode(false);
    setUpdateIndex(null);
    setShowUpdateConfirmation(false);
  };

  const cancelUpdate = () => {
    setShowUpdateConfirmation(false);
  };

  // updateData

  // Delete Data handle code

  const handleRemoveRowFromTable = (index: number) => {
    setShowDeleteConfirmation(true);
    setDeleteIndex(index);
  };
  const confirmDelete = () => {
    setTableData((prevData: any) => {
      const newData = [...prevData];
      newData.splice(deleteIndex, 1);
      return newData;
    });
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
  // Delete Data handle code

  return (
    <div className="my-4">
      <div className="my-10 text-center lg:h-[200px]">
        <Form className="max-w-[700px]" style={{ margin: 'auto', borderRadius: "50px" }}>
          <Form.Item>
            <Input placeholder="Search" style={{ padding: "10px", borderRadius: "50px" }} />
            <span className="absolute right-5 top-1/2 -translate-y-1/2"><RiSearch2Line size={20} /></span>
          </Form.Item>
        </Form>
      </div>
      <table className="w-full border-collapse rounded-md border border-slate-300">
        <thead className=" font-bold">
          <tr className="w-14 bg-slate-200 text-black">
            <th className="border border-slate-300 p-2 text-sm">SL</th>
            <th className="border border-slate-300 p-2 text-sm">Flag</th>
            <th className="border border-slate-300 p-2 text-sm">
              Country Name
            </th>
            <th className="border border-slate-300 p-2 text-sm">
              Office Address
            </th>
            <th className="border border-slate-300 p-2 text-sm">
              Contact Details
            </th>
            <th className="border border-slate-300 p-2 text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr draggable className={`text-center font-medium `}>
            <td className="border border-slate-300 text-sm"></td>
            <label htmlFor="">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </label>
            {inputValue.image && (
              <div className="relative inline-block">
                <Image
                  src={inputValue.image}
                  alt="selected"
                  width={100}
                  height={100}
                />
                <span
                  onClick={handleRemoveConfirmation}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    cursor: "pointer",
                  }}
                >
                  x
                </span>
              </div>
            )}

            {/* confirmation pop up  */}
            {showRemoveConfirmation && (
              <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
                <div className="rounded-md bg-white p-4">
                  <p>Arue you sure Want to remove the image?</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                      onClick={handleRemoveImage}
                    >
                      Yes
                    </button>
                    <button
                      className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                      onClick={() => setShowRemoveConfirmation(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* confirmation pop up  */}

            <td
              className="mx-1 mt-2 flex w-[170px] cursor-default items-center justify-center gap-1 rounded-full border border-slate-300 bg-yellow-500 p-2 text-sm font-bold hover:bg-yellow-400"
              onClick={handleButtonImge}
            >
              {/* <MdCloudUpload /> */}
              <span>File Upload</span>
            </td>
            <td className="border border-slate-300 p-2 text-sm ">
              <input
                type="text"
                value={inputValue.feild}
                onChange={(e) => handleInputChange("feild", e.target.value)}
                className="h-8 border-none  p-2 "
                placeholder="Enter Contry Name...."
              />
            </td>
            <td className="border border-slate-300 p-2 text-sm">
              <input
                type="text"
                value={inputValue.feild2}
                onChange={(e) => handleInputChange("feild2", e.target.value)}
                className="h-8 border-none p-2"
                placeholder="Enter Office Address...."
              />
            </td>
            <td className="border border-slate-300 p-2 text-sm flex items-center">
              <Select
                defaultValue='Select Icons'
                style={{ width: 120 }}
                onChange={(e) => ""}
                options={[
                  { value: 'facebook', label: <FaFacebook color="darkblue" size={20} /> },
                  { value: 'twitter', label: <FaTwitter color="darkblue" size={20} /> },
                  { value: 'instagram', label: <FaInstagram color="darkblue" size={20} /> },
                ]}
              />
              <input
                type="text"
                value={inputValue.feild3}
                onChange={(e) => handleInputChange("feild3", e.target.value)}
                className="flex-1 h-8 border-none p-2 hover:border-none focus:outline-none"
                placeholder="Past Link"
              />
            </td>
            <td className=" border border-slate-300  p-2 text-sm ">
              <button
                className="flex w-40 cursor-default items-center justify-center  gap-1 rounded-full border border-slate-300 bg-orange-500 p-2 px-8 py-2 pt-2 text-lg font-bold hover:bg-orange-600  "
                onClick={handleButtonClickInput}>
                {isUpdateMode ? <div> Update </div> : <div> Add</div>}
              </button>
            </td>
          </tr>
          {tableData.map((item: any, index: number) => (
            <tr
              draggable
              key={index}
              // className={`text-center font-medium ${
              //   (index % 2 === 0 ? "bg-slate-50" : "bg-white",
              //   index === draggedRow ? "bg-slate-100" : "")
              // }`}
              onDragStart={(e) => handleDrageStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
            >
              <td className="border border-slate-300 text-center  text-sm">
                {index + 1 + indexOfFirstItem}
              </td>

              <td className="w-5 border border-slate-300 p-2  text-sm ">
                <div className="flex items-center justify-center gap-2">
                  <Image src={item.image} alt="" height={100} width={100} />
                </div>
              </td>
              <td className="w-[10px] border border-slate-300 p-2  text-sm text-black  ">
                {item.feild}
              </td>
              <td className="w-[10px] border border-slate-300 p-2  text-sm text-black  ">
                <div className="flex w-20 flex-wrap overflow-ellipsis ">
                  {item.feild2}
                </div>
              </td>
              <td className="w-10 overflow-ellipsis border border-slate-300  p-2  text-sm  text-black ">

                {item.feild3}
              </td>
              <td className=" overflow-ellipsis border  border-slate-300 p-2  text-sm">
                <div className="flex items-center justify-center gap-4">
                  {/* Togale tbn */}
                  <label className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="sr-only"
                      />
                      <div
                        className={`box block h-8 w-14 rounded-full ${isChecked ? "bg-green-500" : "bg-slate-200"
                          }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center  rounded-full bg-white  transition ${isChecked ? "translate-x-full" : ""
                          }`}
                      ></div>
                    </div>
                  </label>
                  {/* Togale btn */}
                  {/* Confimattion Pop-up */}
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

                  {/* Confimattion Pop-up */}

                  <RiDragDropFill
                    className="text-blue-500"
                    size={30}
                  // onClick={() => handleMoveup(index)}
                  />

                  <AiOutlineEdit
                    className="h-5 w-5 cursor-pointer text-green-500"
                    onClick={() => handleUpdate(index)}
                  />
                  <RiDeleteBin6Line
                    onClick={() => handleRemoveRowFromTable(index)}
                    className="h-5 w-5 cursor-pointer text-rose-500"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <ul className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                className={`${currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-slate-300 text-slate-700"
                  } rounded-full px-3 py-1`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* confirmation update pop up  */}
      {showUpdateConfirmation && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure Want to update the data</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 rounded-md bg-green-500 px-4 py-2 text-white"
                onClick={confirmUpdate}
              >
                Yes
              </button>
              <button
                className="mr-2 rounded-md bg-slate-500 px-4 py-2 text-white"
                onClick={cancelUpdate}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {/* confirmation update pop up  */}
      {/* confirmation Delete Record  pop up  */}
      {showDeleteConfirmation && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure Want to delete this record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 rounded-md bg-rose-500 px-4 py-2 text-white"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="mr-2 rounded-md bg-slate-500 px-4 py-2 text-white"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {/* confirmation  Delete Record pop up  */}
      <div className="text-center my-10">
        <h4 className="font-bold text-black">Showing 1 to 5 of 97 results</h4>
        <div className="flex items-center w-fit border rounded-full px-1 mx-auto mt-2">
          <Button style={{ border: 0, background: "transparent" }}><FaArrowDown size={30} color="#FFB200" /></Button>
          <h3 className="py-4 bg-[#172554] px-1 text-white font-bold">Show More Results</h3>
          <Button style={{ border: 0, background: "transparent" }}><FaArrowDown color="#FFB200" size={30} /></Button>
        </div>
      </div>
    </div>
  );
};

export default GlobalLocations;

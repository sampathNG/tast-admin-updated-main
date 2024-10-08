import React, { useState } from "react";
// import Modal from "../modal/Modal";
// import GlobalLocations from "../temp/GlobalLocations";

import { CiCircleMinus } from "react-icons/ci";

import GlobalLocations from "../temp/GlobalLocations";
import Modal from "../modal/Modal";
export interface GlobState {
  file?: any;
  homeAddress?: string;
  sl: number;
  id: number;
  country: string;
  image: string;
  officeAddress: string;
  gmail: string;
  contactNo: string;
}
const CreateGlobalLocations: React.FC = () => {
  const [globalLocations, setGlobalLocations] = useState<GlobState[]>([
    {
      sl: 1,
      id: 1,
      country: "India",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
      officeAddress: "Kolkata",
      gmail: "USA",
      contactNo: "1234567890",
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  interface globData {
    file?: any;
    country: string;
    officeAddress: string;
    gmail: string;
    contactNo: string;
    homeAddress: string;
  }
  const [createGlobalLocationData, setCreateGlobalLocationData] = useState<any>(
    {
      file: null,
      country: "",
      officeAddress: "",
      gmail: "",
      contactNo: "",
      homeAddress: "",
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateGlobalLocationData({
      ...createGlobalLocationData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    setCreateGlobalLocationData({
      ...createGlobalLocationData,
      file: selectedFiles?.[0],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing data
      setGlobalLocations((prevGlobalLocations: any) =>
        prevGlobalLocations.map((item: any, index: number) =>
          index === editIndex ? createGlobalLocationData : item,
        ),
      );
    } else {
      // Add new data
      setGlobalLocations((prevGlobalLocations: any) => [
        ...prevGlobalLocations,
        createGlobalLocationData,
      ]);
    }

    setIsVisible(false);
    setCreateGlobalLocationData({
      file: null,
      country: "",
      officeAddress: "",
      gmail: "",
      contactNo: "",
      homeAddress: "",
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleEditClick = (index: number) => {
    setIsEditing(true);
    setEditIndex(index);
    setCreateGlobalLocationData(globalLocations[index]);
    setIsVisible(true);
  };
  return (
    <div className="">
      <div>
        <div>
          <GlobalLocations
            data={globalLocations}
            setGlobalLocations={setGlobalLocations}
            onEditClick={handleEditClick} />
        </div>
      </div>
      <Modal isVisible={isVisible} onClose={setIsVisible}>
        <div className="relative w-[500px] ">
          <div className="flex justify-between">
            <h1 className="p-4 text-center text-xl font-bold text-white">
              Edit Global Locations
            </h1>
            <button
              className="mr-4 text-white"
              onClick={() => setIsVisible(false)}>
              <CiCircleMinus size={24} />
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mb-2 rounded bg-white px-8 pb-8 pt-6 shadow-md"
          >
            <div className="mb-2">
              <label
                className="text-gray-800 mb-2 block text-sm font-bold"
                htmlFor="file"
              >
                Flag
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                className="text-gray-800 mb-2 block text-sm font-bold"
                htmlFor="file"
              >
                / Country{" "}
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={createGlobalLocationData.country}
                onChange={handleChange}
                className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
              />
              <div className="mb-2">
                <label
                  className="text-gray-800 mb-2 block text-sm font-bold"
                  htmlFor="file"
                >
                  Office Address
                </label>
                <input
                  type="text"
                  id="officeAddress"
                  name="officeAddress"
                  value={createGlobalLocationData.officeAddress}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                />
              </div>
              <div className="mb-2">
                <label
                  className="text-gray-800 mb-2 block text-sm font-bold"
                  htmlFor="file"
                >
                  Gmail
                </label>
                <input
                  type="text"
                  id="gmail"
                  name="gmail"
                  value={createGlobalLocationData.gmail}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                />
                <div className="mb-2">
                  <label
                    className="text-gray-800 mb-2 block text-sm font-bold"
                    htmlFor="file"
                  >
                    Contact No
                  </label>
                  <input
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    value={createGlobalLocationData.contactNo}
                    onChange={handleChange}
                    className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="text-gray-800 mb-2 block text-sm font-bold"
                    htmlFor="file"
                  >
                    Home Address
                  </label>
                  <input
                    type="text"
                    id="homeAddress"
                    name="homeAddress"
                    value={createGlobalLocationData.homeAddress}
                    onChange={handleChange}
                    className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="focus:shadow-outline rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none"
                  >
                    {/* Add */}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
export default CreateGlobalLocations;

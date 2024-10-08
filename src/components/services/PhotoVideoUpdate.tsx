import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import PrimaryButton from "@/components/button/PrimaryButton";
import SelectSingleOrMultiImgOrVideo from "../Upload/SelectSIngleOrMultiImgAll";
import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";
import { Button, Form, Input, Space, Switch } from "antd";
import DisplayUploadedImage from "./displayImage/DisplayUploadedImage";
import { FaArrowDown } from "react-icons/fa";
// import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";

const PhotoVideoUpdate = () => {
  const [file, setFile] = useState("");
  const [logoFile, setLogoFile] = useState("");

  return (
    <div className="container mx-auto border-slate-300 p-3 shadow-4">
      <div className="flex gap-3">
        {/* left side bar */}
        <div className="min-w-[150px] bg-[#D1CCCC] p-3">
          <div className="flex flex-col gap-4">
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

          </div>
        </div>
        <div className="mx-auto w-full">
          <h2 className="mb-4 text-center text-2xl font-bold text-black md:text-3xl">
            Service Gallery
          </h2>
          <div className="flex-1">
            <MapPhotoVideoUplod file={file} setFile={setFile} />
            {/* <CompanySupportLogo file={logoFile} setFile={setLogoFile} /> */}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-5">
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
            <DisplayUploadedImage />
          </div>
          <div className="text-center my-10">
            <h4 className="font-bold text-black">Showing 1 to 5 of 97 results</h4>
            <div className="flex items-center w-fit border rounded-full px-1 mx-auto mt-2">
              <Button style={{ border: 0, background: "transparent" }}><FaArrowDown size={30} color="#FFB200" /></Button>
              <h3 className="py-4 bg-[#172554] px-1 text-white font-bold">Show More Results</h3>
              <Button style={{ border: 0, background: "transparent" }}><FaArrowDown color="#FFB200" size={30} /></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapPhotoVideoUplod = ({ file, setFile }: { file: any; setFile: any }) => {
  return (
    <>
      <div className="mb-3 flex w-full items-center justify-evenly gap-3">
        {/* ------Select Logo -------- */}
        <SelectSingleOrMultiImgOrVideo
          style={{ background: "#3B82F6" }}
          file={file}
          setFile={setFile}
          title="Photo/Video"
        />

        <Space.Compact>
          <Form.Item
            name={["search-field"]}
            noStyle
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Input style={{ padding: "10px" }} />
          </Form.Item>
          <Form.Item noStyle>
            <Button
              style={{
                background: "#F8C71B",
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
      </div>
    </>
  );
};

// const CompanySupportLogo = ({ file, setFile }: { file: any; setFile: any }) => {
//   return (
//     <>
//       <h2 className="text-center text-2xl font-bold">Support Company Logo</h2>
//       <div className="mb-3 flex flex-col items-center gap-3">
//         {/* ------Select Logo -------- */}
//         <SelectSingleOrMultiImg
//           file={file}
//           setFile={setFile}
//           title="Select Logos"
//           multiple={true}
//         />
//       </div>
//     </>
//   );
// };

export default PhotoVideoUpdate;

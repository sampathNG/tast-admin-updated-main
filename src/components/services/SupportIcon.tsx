import Image from "next/image";
import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import PrimaryButton from "@/components/button/PrimaryButton";
import SelectSingleOrMultiImgOrVideo from "../Upload/SelectSIngleOrMultiImgAll";
import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";
import { Button, Row } from "antd";
import CustomForm from "../Form/Form";
import CustomInput from "../Form/Input";
import { MdDelete } from "react-icons/md";
import emoji1 from "@/../public/images/icon/emoji1.svg"
import emoji2 from "@/../public/images/icon/emoji2.svg"
import emoji3 from "@/../public/images/icon/emoji3.svg"
import emoji4 from "@/../public/images/icon/emoji4.svg"
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
// import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";

const SupportIcon = () => {
  const [file, setFile] = useState("");
  const [logoFile, setLogoFile] = useState("");

  return (
    <div className="container mx-auto space-y-4 border-slate-300 py-10 shadow-4">
      <MapPhotoVideoUplod file={file} setFile={setFile} />
      <CompanySupportLogo file={logoFile} setFile={setLogoFile} />
    </div>
  );
};

const MapPhotoVideoUplod = ({ file, setFile }: { file: any; setFile: any }) => {
  return (
    <>
      <h2 className="text-center text-xl md:text-3xl font-bold text-black">Segment Photo</h2>
      <div className="mb-3 flex justify-center gap-10 px-4 items-center">
        {/* ------Select Logo -------- */}
        <SelectSingleOrMultiImg
          file={file}
          setFile={setFile}
          title="Photo"
          multiple={true}
        />
        <PrimaryButton type="submit" text={"Uplode"} />
      </div>
    </>
  );
};

const CompanySupportLogo = ({ file, setFile }: { file: any; setFile: any }) => {
  const [url, setUrl] = useState(
    "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
  );
  const urlInputRef = useRef(null);
  return (
    <div className="pt-10">
      <h2 className="text-center text-2xl font-bold mb-4 text-black">support logo</h2>
      <div className="mb-3 flex flex-col items-center gap-3 md: mt-10">
        {/* ------Select Logo -------- */}
        <div className="flex items-center justify-center gap-5 md:gap-10">
          <SelectSingleOrMultiImg
            file={file}
            setFile={setFile}
            title="Select File"
          />
          <span onClick={() => setUrl((urlInputRef as any)?.current?.value)}>
            <PrimaryButton text="Add" style={{ background: "#D3D6DB", color: "black", fontWeight: 'bold' }} />
          </span>
        </div>
        {url && (
          <div className="flex items-center px-2 justify-center gap-10 mt-10">
            <div className="w-fit flex flex-col gap-3 items-center justify-center">
              <Image src={emoji1} alt="emoji1" width={50} height={50} />
              <div className="flex gap-2">
                <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
                <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
              </div>
            </div>
            <div className="w-fit flex flex-col gap-3 items-center justify-center">
              <Image src={emoji2} alt="emoji1" width={50} height={50} />
              <div className="flex gap-2">
                <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
                <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
              </div>
            </div>
            <div className="w-fit flex flex-col gap-3 items-center justify-center">
              <Image src={emoji3} alt="emoji1" width={50} height={50} />
              <div className="flex gap-2">
                <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
                <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
              </div>
            </div>
            <div className="w-fit flex flex-col gap-3 items-center justify-center">
              <Image src={emoji4} alt="emoji1" width={50} height={50} />
              <div className="flex gap-2">
                <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
                <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportIcon;

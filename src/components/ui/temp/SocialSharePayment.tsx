import React, { useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { FiDelete, FiSave } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import dynamic from "next/dynamic";
import SelectSingleOrMultiImg from "@/components/Upload/SelectSingleOrMultiImg";
import PrimaryButton from "@/components/button/PrimaryButton";
import { Button, Form, Input } from "antd";
import Image from 'next/image'

// import "jodit/build/jodit.min.css";

import emoji1 from "@/../public/images/icon/emoji1.svg"
import emoji2 from "@/../public/images/icon/emoji1.svg"
import emoji3 from "@/../public/images/icon/emoji1.svg"
import emoji4 from "@/../public/images/icon/emoji1.svg"
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
const SocialSharePayment: React.FC = () => {

  const [file, setFile] = useState("");

  const [logoFile, setLogoFile] = useState("");

  return (
    <div className="container mx-auto space-y-4 border-slate-300 py-10 shadow-4">
      <div className="flex flex-col gap-3 items-center px-2 md:px-4 justify-center">
        <CompanySupportLogo file={logoFile} setFile={setLogoFile} />
      </div>
      {/* <CompanySupportLogo file={logoFile} setFile={setLogoFile} /> */}
    </div>
  );
};




export default SocialSharePayment;



const CompanySupportLogo = ({ file, setFile }: { file: any; setFile: any }) => {
  const [url, setUrl] = useState(
    "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
  );
  const urlInputRef = useRef(null);
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-center text-2xl font-bold text-black">support logo</h2>
        <div className="flex flex-col items-center gap-3">
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
        </div>
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
            <Image src={emoji2} alt="emoji1" />
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

      {/* social media */}




      <div className="mt-10 md:mt-20">
        <div className="flex items-center">
          <h2 className="text-center text-2xl font-bold text-black">support logo</h2>
          <div className="flex flex-col items-center gap-3">
            {/* ------Select Logo -------- */}
            <div className="flex items-center justify-center gap-2 md:gap-5">
              <SelectSingleOrMultiImg
                file={file}
                setFile={setFile}
                title="Select File"
              />
              <Input style={{ padding: "10px " }} placeholder="Url" />

              <span onClick={() => setUrl((urlInputRef as any)?.current?.value)}>
                <PrimaryButton text="Add" style={{ background: "#D3D6DB", color: "black", fontWeight: 'bold' }} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center px-2 justify-center gap-10 mt-10">
          <div className="w-fit flex flex-col gap-3 items-center justify-center">
            <Image src={emoji1} alt="emoji1" width={50} height={50} />
            <div className="flex gap-2">
              <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
              <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
            </div>
          </div>
          <div className="w-fit flex flex-col gap-3 items-center justify-center">
            <Image src={emoji2} alt="emoji1" />
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
      </div>
    </>
  );
};


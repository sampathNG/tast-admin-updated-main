import { useRef, useState } from "react";
import PrimaryButton from "@/components/button/PrimaryButton";

import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
// import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import Image from "next/image";
import { Jodit } from "jodit-react";
import ServiceCard from "./ServiceCard";
import { FieldValues } from "react-hook-form";
const CardTwoUpdate = () => {
  const [card, setCard] = useState<string>("card One");
  const [C1File, setC1File] = useState("");
  const [C2File, setC2File] = useState("");

  const C1Editor = useRef(null);
  const C2Editor = useRef(null);

  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");

  const C1Submit = (data: FieldValues) => {
    console.log(data);
  };
  const C2Submit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="border-slate-300 px-20 py-10 shadow-4">
      {/* button  and update button  */}
      <ServiceCard
        content={content1}
        setContent={setContent1}
        onSubmitForm={C1Submit}
        file={C1File}
        setFile={setC1File}
        editor={C1Editor}
      />
    </div>
  );
};

export default CardTwoUpdate;

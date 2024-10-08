import { useRef, useState } from "react";
import PrimaryButton from "@/components/button/PrimaryButton";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { BiEdit, BiTrash } from "react-icons/bi";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import ServiceCard from "./ServiceCard";

const CardFourUpdate = () => {
  const [card, setCard] = useState<string>("");
  //
  const [C1File, setC1File] = useState("");
  const [C2File, setC2File] = useState("");
  const [C3File, setC3File] = useState("");
  const [C4File, setC4File] = useState("");
  //
  const C1Editor = useRef(null);
  const C2Editor = useRef(null);
  const C3Editor = useRef(null);
  const C4Editor = useRef(null);
  //
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");

  //
  const C1Submit = (data: FieldValues) => {
    console.log(data);
  };
  const C2Submit = (data: FieldValues) => {
    console.log(data);
  };
  const C3Submit = (data: FieldValues) => {
    console.log(data);
  };
  const C4Submit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="border-slate-300 p-5 shadow-4 md:px-20 md:py-10">
        {/* button  and update button  */}
        <div className="mb-10 flex justify-around gap-4">
          <div className="mx-auto flex items-center justify-center gap-2">
            <span onClick={() => setCard("card one")}>
              <PrimaryButton text={"Card One"} />
            </span>
            <span onClick={() => setCard("card two")}>
              {" "}
              <PrimaryButton text={"Card Two"} />
            </span>
            <span onClick={() => setCard("card three")}>
              {" "}
              <PrimaryButton text={"Card Three"} />
            </span>
            <span onClick={() => setCard("card four")}>
              {" "}
              <PrimaryButton text={"Card Four"} />
            </span>
          </div>
        </div>
        <h2 className="m-4 mb-2 text-center text-2xl font-bold uppercase ">
          {!card && "no card selected"}
        </h2>
        {card === "card one" && (
          <ServiceCard
            content={content1}
            setContent={setContent1}
            onSubmitForm={C1Submit}
            file={C1File}
            setFile={setC1File}
            editor={C1Editor}
          />
        )}
        {card === "card two" && (
          <ServiceCard
            content={content2}
            setContent={setContent2}
            onSubmitForm={C2Submit}
            file={C2File}
            setFile={setC2File}
            editor={C2Editor}
          />
        )}
        {card === "card three" && (
          <ServiceCard
            content={content3}
            setContent={setContent3}
            onSubmitForm={C3Submit}
            file={C3File}
            setFile={setC3File}
            editor={C3Editor}
          />
        )}
        {card === "card four" && (
          <ServiceCard
            content={content4}
            setContent={setContent4}
            onSubmitForm={C4Submit}
            file={C4File}
            setFile={setC4File}
            editor={C4Editor}
          />
        )}
      </div>
    </>
  );
};

export default CardFourUpdate;

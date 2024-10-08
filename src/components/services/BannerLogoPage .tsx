import Image from "next/image";
import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import dynamic from "next/dynamic";
import PrimaryButton from "../button/PrimaryButton";
import { tree } from "next/dist/build/templates/app-page";
import UploadBtn from "../button/UploadBtn";
import CustomForm from "../Form/Form";
import CustomInput from "../Form/Input";
import { FieldValues } from "react-hook-form";
import { Button, Row, Upload } from "antd";
import CustomTextarea from "../Form/Textarea";
import { LuImagePlus } from "react-icons/lu";
import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const BannerLogoPage: React.FC = () => {
  // for input taking file code
  const [logoFile, setLogoFile] = useState<any>("");
  const [bannerFile, setBannerFile] = useState<any>("");
  const FileInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef2 = useRef<HTMLInputElement>(null);
  const [selectInputFiles, setSlectInputFile] = useState<File | undefined>();
  const [selectInputFilesBaner, setSlectInputFileBaner] = useState<File[]>([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState<boolean>(false);
  const [confirmationPopUpBaner, setConfirmationPopUpBaner] =
    useState<boolean>(false);
  const [uploadSucces, setUploadSuccess] = useState<boolean>(false);
  const [uploadedFile, setUploadedFiles] = useState<File[]>([]);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [confirmationPopUpIUplod, setConfirmationPopUpate] =
    useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSlectInputFile(file);
    }
  };
  const handleFileChangeBaner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) {
      setSlectInputFileBaner(Array.from(file));
    }
  };
  const handleConfirmationPopUp = () => {
    setConfirmationPopUp(true);
  };
  const handleConfirmationPopUpBaner = () => {
    setConfirmationPopUpBaner(true);
  };

  const handleCancel = () => {
    setConfirmationPopUp(false);
  };
  const handleCancelBaner = () => {
    setConfirmationPopUpBaner(false);
  };

  const handleEditClick = () => {
    FileInputRef.current?.click();
  };
  const handleEditClickBaner = () => {
    FileInputRef2.current?.click();
  };

  const handleDeleteFile = () => {
    setSlectInputFile(undefined);
    setConfirmationPopUp(false);
  };

  const handleDeleteFileClck = (index: number) => {
    setSlectInputFileBaner([]);
    //setDeleteIndex(index); //this is for now temporary use when data store in db this ilne
    //setConfirmationPopUpate(true);
  };
  const handleDeleteFileBaner = () => {
    setDeleteIndex(null);
  };

  const onSubmitForm = (data: FieldValues) => {
    console.log(data);
  };
  // const handleDeleteUplod =()=>{
  //   const updatedFiles = [...uploadedFile];
  //   updatedFiles.splice(deleteIndex , 1);
  //   setUploadedFiles(updatedFiles);
  //   setConfirmationPopUpate(false);
  //   setDeleteIndex(null)
  // }

  const handleDeleteUplod = () => {
    if (deleteIndex !== null) {
      const updatedFiles = [...uploadedFile];
      updatedFiles.splice(deleteIndex, 1);
      setUploadedFiles(updatedFiles);
    }
    setConfirmationPopUpate(false);
    setDeleteIndex(null);
  };

  const handleUplodCancel = () => {
    setConfirmationPopUpate(false);
  };

  const handleUploadLogo = () => {
    console.log("uplode logo");
    // setUploadedFiles([...uploadedFile, ...selectInputFilesBaner]);
    // setSlectInputFileBaner([]);
    // setUploadSuccess(true);
    // setTimeout(() => {
    //   setUploadSuccess(false);
    // }, 3000);
  };
  const handleUploadClick = () => {
    setUploadedFiles([...uploadedFile, ...selectInputFilesBaner]);
    setSlectInputFileBaner([]);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 2000);
  };

  // for input taking file code
  return (
    <div className="container mx-auto  p-5 py-10 shadow-4 md:px-20">
      {/* LOGO UPLODE */}
      <LogoUplodArea logoFile={logoFile} setLogoFile={setLogoFile} />
      {/* BANNER UPLODE */}
      {/* <BannerUplodArea bannerfile={bannerFile} setBannerFile={setBannerFile} /> */}
      {/* <h1 className="text-center text-2xl font-semibold text-blue-500">
        its text delete
      </h1> */}
      {/* FORM */}
      <Row justify="center" align="middle">
        <CustomForm onSubmit={onSubmitForm}>
          <CustomInput
            type="text"
            style={{ background: "#F2F0FF", color: "#3300FF" }}
            name="BannerTitle"
            placeholder="Enter Title"
            label="Banner Title"
          />
          <CustomTextarea type="text" style={{ background: "#DED6FF" }} name="BannerTag" label="Banner Tag" />
          <PrimaryButton type="submit" className="bg-primary mx-auto" text={"Update"} />
        </CustomForm>
      </Row>
      <div className="mt-14 md:mt-32 flex justify-between items-center">
        <LogoUplodArea logoFile={logoFile} setLogoFile={setLogoFile} />
        <PrimaryButton type="submit" className="bg-primary mx-auto" text={"Update"} />
      </div>
    </div>
  );
};
const LogoUplodArea = ({
  logoFile,
  setLogoFile,
}: {
  logoFile: any;
  setLogoFile: any;
}) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Website site Banner</h2>
      <div className="mb-3 flex flex-col items-center gap-3">
        {/* ------Select Logo -------- */}
        <SelectSingleOrMultiImg
          file={logoFile}
          setFile={setLogoFile}
          title="Select Banner Image"
        />
      </div>
    </>
  );
};

const BannerUplodArea = ({
  setBannerFile,
  bannerfile,
}: {
  setBannerFile: any;
  bannerfile: any;
}) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Banner Upload</h2>
      <div className="mb-3 flex flex-col items-center gap-5">
        {/* ------Select Logo -------- */}
        <SelectSingleOrMultiImg
          file={bannerfile}
          setFile={setBannerFile}
          title="Select Banner"
        />
      </div>

    </>
  );
};

export default BannerLogoPage;

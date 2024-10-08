import { Row } from "antd";
import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";
import CustomForm from "../Form/Form";
import CustomInput from "../Form/Input";
import CustomTextarea from "../Form/Textarea";
import PrimaryButton from "../button/PrimaryButton";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const ServiceCard = ({
  file,
  setFile,
  onSubmitForm,
  editor,
  content,
  setContent,
}: {
  file: any;
  setFile: any;
  onSubmitForm: any;
  editor: any;
  content: any;
  setContent: any;
}) => {
  return (
    <div className="mt-3">
      <div className="flex items-center justify-start">
        <SelectSingleOrMultiImg
          file={file}
          setFile={setFile}
          title="Select File"
        />
      </div>
      {/*  */}
      <Row justify="center" align="middle">
        <CustomForm onSubmit={onSubmitForm}>
          <CustomInput
            type="text"
            name="cardTitle"
            placeholder="Card Title"
            label="Title"
            style={{ background: "#DED6FF", borderRadius: "5px" }}
          />
          <CustomTextarea type="text" style={{ background: "#DED6FF", borderRadius: "5px" }} name="cardTag" label="Tag" />
          <PrimaryButton type="submit" text={"Uplode"} />
        </CustomForm>
      </Row>

      {/* Editior */}
      <span className="mt-5">
        <label className="text-md py-5">Description</label>
        <JoditEditor
          ref={editor}
          value={content}
          config={{
            height: 600,
          }}
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        />
      </span>
    </div>
  );
};

export default ServiceCard;

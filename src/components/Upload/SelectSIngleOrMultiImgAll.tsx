import { Button, Upload } from "antd";
import { LuImagePlus } from "react-icons/lu";

const SelectSingleOrMultiImgOrVideo = ({
  setFile,
  file,
  title,
  multiple,
  style
}: {
  setFile: any;
  file: any;
  title: string;
  multiple?: boolean;
  style?: any
}) => {
  const onChangeWithCondition = (e: any) => {
    if (multiple && e.fileList.length >= 1) {
      const orginalFilesArray = e.fileList.map((f: any) => f.originFileObj);
      setFile(orginalFilesArray);
      return;
    }
    if (!multiple && e.fileList.length >= 1) {
      setFile([e.fileList[0]?.originFileObj]);
      return;
    }
    setFile("");
  };
  const fileProps = {
    beforeUpload: () => false,
    onChange: onChangeWithCondition,
    listType: "picture",
    maxCount: multiple ? 100 : 1,
    type: "drag",
    multiple: multiple || false,
  };
  return (
    <Upload className="p-4" {...(fileProps as any)} style={style}>
      <Button
        className={`flex items-center gap-2  ${file.length > 0 && "bg-green-600 text-white"} p-5 text-2xl`}
      >
        {file.length >= 1
          ? `${multiple ? "Add More" : "Replace"} : ${file.length > 1 ? "Multiple Selected" : file[0]?.name}`
          : title}
      </Button>
    </Upload>
  );
};

export default SelectSingleOrMultiImgOrVideo;

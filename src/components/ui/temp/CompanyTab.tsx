import { Button, Form, Input, Space, Switch } from 'antd'
import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react'
import { FiSave } from 'react-icons/fi'

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CompanyTab = () => {

    const [content, setContent] = useState("");
    const Editor = useRef(null);
    const [uploadSucces, setUploadSuccess] = useState(false);
    const handleSuccesPopup = () => {
        setUploadSuccess(true);

        setTimeout(() => {
            setUploadSuccess(false);
        }, 3000);
    };

    return (
        <section>
            <div className="conntainer mx-auto">
                <div className='flex gap-2'>
                    <div className="min-w-[200px] bg-[#D1CCCC] p-3">
                        <Form className='flex flex-col gap-4'>
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
                        </Form>
                    </div>
                    <div className="md:h-screen flex-1">
                        <h2 className="my-4 text-center text-2xl font-bold text-black">Company</h2>
                        <form action="" className="relative">
                            <div className="absolute -top-10 right-5 flex items-center gap-3">
                                {/* <FaEdit className="text-green-600" size={36} /> */}
                                <FiSave
                                    type="submit"
                                    className="cursor-pointer text-blue-600"
                                    size={36}
                                    onClick={handleSuccesPopup}
                                />
                            </div>
                            <span className="">
                                <label className="text-md py-5 ">Description</label>
                                <JoditEditor
                                    ref={Editor}
                                    value={content}
                                    config={{
                                        height: 600,
                                    }}
                                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                />
                            </span>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CompanyTab
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Col, Modal, Row, Switch, message, Form, Input, Image, Upload } from "antd";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line, RiSearch2Line } from "react-icons/ri";
import ICTable from "@/components/ui/ICTable";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { IAdmin } from "@/types/admin";
import { UploadOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  addAdmin,
  removeAdmin,
  statusChange,
  updateAdmin,
} from "@/redux/fetures/admin/adminSlice";
import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";
import CustomTreeSelect from "@/components/Form/TreeSelect";


const AdminListPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const dispatch = useAppDispatch();
  const adminDatas = useAppSelector((state) => state.admin);
  const handleStatusChange = (id: string, active: boolean) => {
    dispatch(statusChange({ id, active }));
  };

  const handleDeleteAdmin = (id: string) => {
    dispatch(removeAdmin({ id }));
    message.open({
      type: "success",
      content: "Admin deleted successfully",
    });
  };
  let columns = [
    { title: "No", dataIndex: "sl" },
    {
      title: "Photo", dataIndex: "photo",
      render: (text: string) => (
        <Image
          src={text}
          alt="admin photo"
          width={50}
          height={50}
          style={{ objectFit: 'contain' }}
        />
      )
    },
    { title: "Name", dataIndex: "name" },
    { title: "User Name", dataIndex: "userName" },
    { title: "G-mail", dataIndex: "email" },
    { title: "Login URL", dataIndex: "url" },
    { title: "Password", dataIndex: "password" },
    {
      title: "Access",
      dataIndex: "accessList",
      // render: (data: string[]) =>
      //   data.map((item, i) => (
      //     <span className="mx-1" key={i}>
      //       {item}
      //     </span>
      //   )),
    },

    {
      title: "See",
      render: (data: IAdmin) => {
        return (
          <div className="flex w-[120px] items-center justify-between">
            <Switch
              style={{ background: data?.active ? "#172554" : "gray" }}
              size="small"
              checked={data.active}
              onChange={(checked) => handleStatusChange(data.sl, checked)}
            />
            <UpdateAdminModal updateData={data} />
            <RiDeleteBin5Line
              size={24}
              color="red"
              onClick={() => handleDeleteAdmin(data.sl)}
            />
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="" />
      <div className="flex items-center justify-center gap-3">
        <Link href={"/c/bankAccount"}>
          <Button
            style={{ background: "#6366F1" }}
            type="primary"
            size={"middle"}
          >
            Bank & Wallet
          </Button>
        </Link>
        <Link href={"/c/createAdmin"}>
          <Button
            style={{ background: "#6366F1" }}
            type="primary"
            size={"middle"}
          >
            Admin
          </Button>
        </Link>

      </div>
      <div className="flex items-center space-y-4 justify-center mt-10 gap-3">
        <Form className="max-w-[500px]" style={{ margin: 'auto', borderRadius: "50px" }}>
          <Form.Item>
            <Input placeholder="Search" style={{ padding: "10px", borderRadius: "50px" }} />
            <span className="absolute right-5 top-1/2 -translate-y-1/2"><RiSearch2Line size={20} /></span>
          </Form.Item>
        </Form>


      </div>
      <div className="-mt-2 mb-4 flex items-center justify-end gap-3">
        {/* <Link href={"/c/api"}>
          <Button
            style={{ background: "#FFB200" }}
            type="primary"
            size={"middle"}
          >
            API
          </Button>
        </Link> */}

        <AddSubAdminModal />
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={adminDatas}
        pageSize={size}
        totalPages={adminDatas?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AdminListPage;


// ==================

const treeData = [
  {
    title: "Main Admin",
    value: "admin",
    key: "admin",
  },
  {
    title: "Dashboards",
    value: "dashboard",
    key: "dashboard",
    children: [
      {
        title: "View",
        value: "view",
        key: "view",

      }
    ]
  },
  {
    title: "Monthly Pay Track",
    value: "monthlyPay",
    key: "monthlyPay",
    children: [
      {
        title: "View",
        value: "view",
        key: "view",

      }
    ]
  },
  {
    title: "User",
    value: "user",
    key: "user",
    children: [
      {
        title: "View",
        value: "view",
        key: "view",
        children: [
          {
            title: "profile",
            value: "profile",
            key: "profile",

      },
          {
            title: "Orders",
            value: "order",
            key: "order",

      },
          {
            title: "Payment",
            value: "payment",
            key: "payment",

      },
          {
            title: "Refund",
            value: "refund",
            key: "refund",

      }
    ]
  },
      {
        title: "Edit",
        value: "edit",
        key: "edit",
        children: [
          {
            title: "Settings",
            value: "Settings",
            key: "Settings",
            children: [
              {
                title: "Account Delete",
                value: "accountDelete",
                key: "accountDelete",
          },
              {
                title: "Account Active",
                value: "accountActive",
                key: "accountActive",
          },
              {
                title: "Account Block",
                value: "accountBlock",
                key: "accountBlock",
          },
        ]

      },
   
    ]
      }
    ]
  },


  {
    title: "Order Access",
    value: "orders",
    key: "orders",
    children: [
      {
        title: "Pending",
        value: "orders-pending",
        key: "orders-pending",
      },
      {
        title: "Payment",
        value: "orders-payment",
        key: "orders-payment",
      },
      {
        title: "Waiting",
        value: "orders-waiting",
        key: "orders-waiting",
      },
      {
        title: "Working",
        value: "orders-working",
        key: "orders-working",
      },
      {
        title: "Complete",
        value: "orders-complete",
        key: "orders-complete",
      },
      {
        title: "Canceled",
        value: "orders-canceled",
        key: "orders-canceled",
      },
    ],
  },
  {
    title: "Contact Us",
    value: "contactUs",
    key: "0-1",
    children: [
      {
        title: "All",
        value: "all",
        key: "all",
      },
    ],
  },
  {
    title: "Live Chat",
    value: "liveChat",
    key: "liveChat",
    children: [
      {
        title: "Offline Payment Issue",
        value: "liveChat-oflinePaymentIssue",
        key: "liveChat-oflinePaymentIssue",
      },
      {
        title: "Online Payment Issue",
        value: "liveChat-onlinePaymentIssue",
        key: "liveChat-onlinePaymentIssue",
      },
      {
        title: "Order Problems",
        value: "liveChat-orderProblems",
        key: "liveChat-orderProblems",
      },
      {
        title: "Account Problems",
        value: "liveChat-accountProblems",
        key: "liveChat-accountProblems",
      },
      {
        title: "Work Problem",
        value: "liveChat-workProblems",
        key: "liveChat-workProblems",
      },
      {
        title: "Others",
        value: "liveChat-others",
        key: "liveChat-others",
      },
    ],
  },
]
 

const AddSubAdminModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [signUpCode, setSignUpCode] = useState('');
  const dispatch = useAppDispatch();
  const adminDatas = useAppSelector((state) => state.admin);


  const generateSignUpURL = () => {
    const baseURL = "https://example.com/signup";
    const uniqueCode = Math.random().toString(36).substring(2, 15);
    return `${baseURL}?code=${uniqueCode}`;
  };

  const onSubmit = async (data: any) => {
    const { password, rePassword, ...remainingData } = data;
    const lastAdminData = adminDatas.at(-1);
    const lastAdminId: string = lastAdminData?.sl as string;
    const string = parseInt(lastAdminId.replace(/\D/g, ""));
    const addAdminData = {
      id: `admin${Number(string) + 1}`,
      ...remainingData,
      active: false,
    };
    dispatch(addAdmin(addAdminData));
    closeModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUploadChange = ({ fileList }: any) => {
    setFileList(fileList);
  };

  return (
    <div>
      <Button
        onClick={showModal}
        style={{ background: "#DCF6E5", color: "black", fontWeight: "400" }}
        type="primary"
        size={"middle"}
      >
        Add Sub-Admin
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={600}
        centered
      >
        <CustomForm className="w-full" onSubmit={onSubmit}>
          <div className="border border-gray-300 rounded p-4">
            <p className="mb-5 text-center text-xl font-semibold">Add Sub Admin</p>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="flex items-center">
                  <div className="w-1/3 bg-blue-500 text-white p-2">Photo</div>

                  <Upload
                    listType="picture"
                    fileList={fileList}
                    onChange={handleUploadChange}
                    beforeUpload={() => false} // Prevent auto-upload
                  >
                    <Button icon={<CloudUploadOutlined />}>Upload Photo</Button>
                  </Upload>

                </div>
              </Col>
              <Col span={24}>
                <div className="flex items-center">
                  <div className="w-1/3 bg-blue-500 text-white p-2">Name</div>
                  <div className="w-2/3 mt-6">
                    <CustomInput className="w-2/3 mt-6"
                      label="" placeholder="" name="name" type="text" />
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="flex items-center">
                  <div className="w-1/3 bg-blue-500 text-white p-2">Username</div>
                  <div className="w-2/3 mt-6">
                    <CustomInput className="w-2/3 mt-6"
                      label="" placeholder="" name="name" type="text" />
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="flex items-center">
                  <div className="w-1/3 bg-blue-500 text-white p-2">Gmail</div>
                  <div className="w-2/3 mt-6">
                    <CustomInput className="w-2/3 mt-6"
                      label="" placeholder="" name="email" type="email" />
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="flex items-center">
                  <div className="w-1/3 bg-blue-500 text-white p-2">Login URL</div>
                  <div className="w-2/3 mt-6">
                    <CustomInput
                      type="text"
                      name="signUpCode"
                      label=""
                      placeholder=""
                      value={signUpCode}
                      onChange={(e) => setSignUpCode(e.target.value)}
                      addonAfter={<Button onClick={() => setSignUpCode(generateSignUpURL())}>URL Generate</Button>}
                    />
                  </div>
                </div>
              </Col>

              <Col span={24}>
                <div className="flex items-center mb-4">
                  <div className="w-1/3 bg-blue-500 text-white p-2">PIN Code</div>
                  <div className="w-2/3 mt-6">
                    <CustomInput
                      label="" placeholder="" name="password" type="password" />
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="flex items-center mb-4">
                  <div className="w-1/3 bg-blue-500 text-white p-2">Password</div>
                  <div className="w-2/3 mt-6">
                    <CustomInput
                      label="" placeholder="" name="password" type="password" />
                  </div>
                </div>
              </Col>

              <Col span={24}>
                <div className="flex items-center">
                  <div className="w-1/3 bg-blue-500 text-white p-2">Access</div>
                  <div className="w-2/3 mt-6">
                    <CustomTreeSelect
                      name="accessList"
                      label=""
                      treeData={treeData}
                    /></div>


                </div>
              </Col>

              <Col span={24} className="flex justify-center">
                <Button className="mr-2" onClick={closeModal}>Cancel</Button>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Col>
            </Row>
          </div>
        </CustomForm>
      </Modal>
    </div>
  );
};



const UpdateAdminModal = ({ updateData }: { updateData: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    const { password, ...remainingData } = data;
    const { id, active } = updateData;
    const updateAdminData = {
      id,
      ...remainingData,
      active,
    };
    dispatch(updateAdmin(updateAdminData));
    closeModal();
  };

  // const treeData = [
  //   {
  //     title: "Order Access",
  //     value: "orders",
  //     key: "orders",
  //     children: [
  //       {
  //         title: "Pending",
  //         value: "orders-pending",
  //         key: "orders-pending",
  //       },
  //       {
  //         title: "Payment",
  //         value: "orders-payment",
  //         key: "orders-payment",
  //       },
  //       {
  //         title: "Waiting",
  //         value: "orders-waiting",
  //         key: "orders-waiting",
  //       },
  //       {
  //         title: "Working",
  //         value: "orders-working",
  //         key: "orders-working",
  //       },
  //       {
  //         title: "Complete",
  //         value: "orders-complete",
  //         key: "orders-complete",
  //       },
  //       {
  //         title: "Canceled",
  //         value: "orders-canceled",
  //         key: "orders-canceled",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Contact Us",
  //     value: "contactUs",
  //     key: "0-1",
  //     children: [
  //       {
  //         title: "All",
  //         value: "all",
  //         key: "all",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Live Chat",
  //     value: "liveChat",
  //     key: "liveChat",
  //     children: [
  //       {
  //         title: "Offline Payment Issue",
  //         value: "liveChat-oflinePaymentIssue",
  //         key: "liveChat-oflinePaymentIssue",
  //       },
  //       {
  //         title: "Online Payment Issue",
  //         value: "liveChat-onlinePaymentIssue",
  //         key: "liveChat-onlinePaymentIssue",
  //       },
  //       {
  //         title: "Order Problems",
  //         value: "liveChat-orderProblems",
  //         key: "liveChat-orderProblems",
  //       },
  //       {
  //         title: "Account Problems",
  //         value: "liveChat-accountProblems",
  //         key: "liveChat-accountProblems",
  //       },
  //       {
  //         title: "Work Problem",
  //         value: "liveChat-workProblems",
  //         key: "liveChat-workProblems",
  //       },
  //       {
  //         title: "Others",
  //         value: "liveChat-others",
  //         key: "liveChat-others",
  //       },
  //     ],
  //   },
  // ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUploadChange = ({ fileList }: any) => {
    setFileList(fileList);
  };

  return (
    <div>
      <CiEdit className="cursor-pointer" onClick={showModal} size={24} />
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={600}
        centered
      >
        <CustomForm className="w-full" onSubmit={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p className="mb-5 text-center text-xl font-semibold">Update Sub Admin</p>
            <Row gutter={{ xl: 24 }}>
              <Col className="gutter-row" span={24} style={{ marginBottom: "10px" }}>
                <Upload
                  listType="picture"
                  fileList={fileList}
                  onChange={handleUploadChange}
                  beforeUpload={() => false} // Prevent auto-upload
                >
                  <Button icon={<UploadOutlined />}>Upload Photo</Button>
                </Upload>
              </Col>
              <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="name"
                  label="Name"
                  defaultValue={updateData.name}
                />
              </Col>
              <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="userName"
                  label="User Name"
                  defaultValue={updateData.userName}
                />
              </Col>
              <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="email"
                  label="Email"
                  defaultValue={updateData.email}
                />
              </Col>
              <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="url"
                  name="url"
                  label="URL"
                  defaultValue={updateData.url}
                />
              </Col>
              <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="password"
                  name="password"
                  label="Password"
                />
              </Col>
              <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
                <CustomTreeSelect
                  name="accessList"
                  label="Access"
                  treeData={treeData}
                />
              </Col>
              <Col className="gutter-row" span={24}>
                <Button htmlType="submit" type="primary">
                  Update
                </Button>
              </Col>
            </Row>
          </div>
        </CustomForm>
      </Modal>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Col, Modal, Row, Switch, message, Form, Input, Select, Image, } from "antd";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line, RiSearch2Line } from "react-icons/ri";
import ICTable from "@/components/ui/ICTable";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { IBank } from "@/types/bank";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  addBank,
  removeBank,
  statusChange,
  updateBank,
} from "@/redux/fetures/bank/bankSlice";



import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";
import CustomTreeSelect from "@/components/Form/TreeSelect";
const { Option } = Select;
const BankListPage = () => {

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const dispatch = useAppDispatch();
  const bankDatas = useAppSelector((state) => state.bank);
  const handleStatusChange = (id: string, active: boolean) => {
    dispatch(statusChange({ id, active }));
  };

  const handleDeleteBank = (id: string) => {
    dispatch(removeBank({ id }));
    message.open({
      type: "success",
      content: "Admin deleted successfully",
    });
  };
  let columns = [
    { title: "No.", dataIndex: "sl" },
    { title: "Bank and Wallet Name", dataIndex: "bankName" },
    { 
      title: "Bank and Wallet Logo", 
      dataIndex: "bankLogo",
      render: (text: string) => (
        <Image 
          src={text} 
          alt="Bank Logo" 
          width={50} 
          height={50} 
          style={{ objectFit: 'contain' }} 
        />
      )
    },
    { 
      title: "Bank and Wallet QR Code", 
      dataIndex: "qrCode",
      render: (text: string) => (
        <Image 
          src={text} 
          alt="QR Code" 
          width={50} 
          height={50} 
          style={{ objectFit: 'contain' }} 
        />
      )
    },
    { title: "Bank and Wallet Account Info", dataIndex: "accountInfo" }, // Corrected dataIndex
    { title: "Tax Rate", dataIndex: "taxInfo" },
    { title: "Currency Support", dataIndex: "currency" },
    {
      title: "See",
      render: (data: IBank) => {
        return (
          <div className="flex w-[120px] items-center justify-between">
            <Switch
              style={{ background: "#172554" }}
              size="small"
              checked={data.see}
              onChange={(checked) => handleStatusChange(data.sl, checked)}
            />
            <UpdateBankModal updateData={data} />
            <RiDeleteBin5Line
              size={24}
              color="red"
              onClick={() => handleDeleteBank(data.sl)}
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
            style={{ background: "#6366F1"}}
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
    <AddBank />
      
      </div>
  
      <ICTable
        loading={false}
        columns={columns}
        dataSource={bankDatas}
        pageSize={size}
        totalPages={bankDatas?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default BankListPage;
const AddBank = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const bankDatas = useAppSelector((state) => state.bank);
  const onSubmit = async (data: any) => {
    const { password, rePassword, ...remainingData } = data;
    const lastBankData = bankDatas.at(-1);
    const lastBankId: string = lastBankData?.sl as string;
    const string = parseInt(lastBankId.replace(/\D/g, ""));
    const addBankData = {
      id: `bank${Number(string) + 1}`,
      ...remainingData,
      active: false,
    };
    dispatch(addBank(addBankData));
    closeModal();
  };
const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        onClick={showModal}
        style={{ background: "#FFEAB8", color: "#000000", }}
        type="primary"
        size={"middle"}
      >
        Add Bank Wallet
      </Button>
      <Modal
      open={isModalOpen}
      onCancel={closeModal}
      footer={null}
      width={800}
      centered
    >
      <CustomForm className="w-full bg-[#6B5D5D]" onSubmit={onSubmit}>
        <div
          style={{
            border: '1px solid #d9d9d9',
            borderRadius: '5px',
            padding: '15px',
            marginBottom: '10px',
          }}
        >
          <p className="mb-5 text-center text-white text-xl font-semibold">Add Bank Wallet</p>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="Type">
                <Select defaultValue="select" style={{ width: '100%' }}>
                  <Option value="bank">Bank</Option>
                  <Option value="wallet">Wallet</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <CustomInput type="text" name="bankName" label="Bank" />
            </Col>
            <Col span={6}>
              <Button style={{ width: '100%', marginBottom: '10px' }}>Bank Logo</Button>
              <Button style={{ width: '100%' }}>Bank QR Code</Button>
            </Col>
            <Col span={6}>
              <CustomInput type="number" name="taxRate" label="Tax Rate" />
            </Col>
          </Row>
          <Row gutter={24} style={{ marginTop: '20px' }}>
            <Col span={12}>
            <div style={{ background: '#FFFFFF', height: '100%', border: '1px solid #d9d9d9', borderRadius: '5px', padding: '15px' }}>
            
              <CustomInput type="text" name="accountDetails" label="Account Info" />
            
            </div>
            </Col>
            <Col span={12}>
              <div style={{ border: '1px solid #d9d9d9', borderRadius: '5px', padding: '15px' }}>
                <Form.Item label="Currency Support">
                  <Row gutter={8}>
                    <Col span={16}>
                      <Select defaultValue="USD" style={{ width: '100%' }}>
                        <Option value="USD">USD</Option>
                        <Option value="EUR">EUR</Option>
                        <Option value="GBP">GBP</Option>
                      </Select>
                    </Col>
                    <Col span={8}>
                      <Button style={{ background: "#FFB200", color: "#000000"}}>Add</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <div style={{ background: '#FFFFFF', borderRadius: '5px', alignItems: 'center', marginTop: '10px', display: 'flex', flexWrap: 'wrap' }}>
                  {[...Array(12)].map((_, index) => (
                    <span
                      key={index}
                      style={{
                        marginRight: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #d9d9d9',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        fontSize: '20px',
                      }}
                    >
                      USD
                       <Button
                       type="link"
                       style={{
                         marginLeft: '5px',
                         padding: 0,
                         color: 'red',
                         border: '2px solid red',
                         borderRadius: '50%',
                         width: '20px',
                         height: '20px',
                         lineHeight: '18px',
                         textAlign: 'center',
                       }}
                     >
                        X</Button>
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
         
        </div>
      </CustomForm>
    </Modal>
      
    </div>
  );
};
const UpdateBankModal = ({ updateData }: { updateData: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    const { id, active } = updateData;
    const updateBankData = {
      id,
      ...data,
      active,
    };
    dispatch(updateBank(updateBankData));
    closeModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            <p className="mb-5 text-center text-xl font-semibold">Update Bank Wallet</p>
            <Row gutter={{ xl: 24 }}>
              <Col span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="bankName"
                  label="Bank Name"
                  defaultValue={updateData.bankName}
                />
              </Col>
              <Col span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="bankLogo"
                  label="Bank Logo URL"
                  defaultValue={updateData.bankLogo}
                />
              </Col>
              <Col span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="qrCode"
                  label="QR Code URL"
                  defaultValue={updateData.qrCode}
                />
              </Col>
              <Col span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="accountInfo"
                  label="Account Info"
                  defaultValue={updateData.accountInfo}
                />
              </Col>
              <Col span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="taxInfo"
                  label="Tax Info"
                  defaultValue={updateData.taxInfo}
                />
              </Col>
              <Col span={12} style={{ marginBottom: "10px" }}>
                <CustomInput
                  type="text"
                  name="currency"
                  label="Currency Support"
                  defaultValue={updateData.currency}
                />
              </Col>
            </Row>
          </div>
        </CustomForm>
      </Modal>
    </div>
  );
};


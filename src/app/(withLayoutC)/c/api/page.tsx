"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Col, Modal, Row, Tag } from "antd";
import ICTable from "@/components/ui/ICTable";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { IApi } from "@/types/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";
import { FaUserPlus } from "react-icons/fa";
import { addApi } from "@/redux/fetures/api/apiSlice";

const ApiListPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const apiData = useAppSelector((state) => state.api);
  let columns = [
    { title: "SL", dataIndex: "id" },
    { title: "Company Name", dataIndex: "companyName" },
    { title: "API Name", dataIndex: "apiName" },
    { title: "Publishable Key", dataIndex: "publishableKey" },
    { title: "Secret Key", dataIndex: "secretKey" },

    {
      title: "Status",
      dataIndex: "status",
      render: (data: boolean) => {
        return (
          <div>
            {data ? (
              <Tag color="success">Connected</Tag>
            ) : (
              <Tag color="error">Disconnected</Tag>
            )}
          </div>
        );
      },
    },
    {
      title: "Action",
      render: (data: IApi) => {
        return (
          <div>
            <button className="rounded-md bg-blue-500 px-3 py-1 text-[14px]  text-white transition-all hover:bg-white hover:text-blue-600 hover:shadow-md">
              Run
            </button>
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
      <Breadcrumb pageName="API List" />

      <div className="-mt-2 mb-4 flex items-center justify-between gap-3">
        <AadminAddModal />
        <Link href={"/c/createAdmin"}>
          <Button
            style={{ background: "#FFB200" }}
            type="primary"
            size={"middle"}
          >
            Sub admin
          </Button>
        </Link>
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={apiData}
        pageSize={size}
        totalPages={apiData?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

const AadminAddModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {
    const addApiData = {
      id: "1a",
      ...data,
      status: true,
    };
    dispatch(addApi(addApiData));
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
        style={{ background: "#FFB200" }}
        type="primary"
        icon={<FaUserPlus className="-mb-[2px]" />}
        size={"middle"}
      >
        Api
      </Button>
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
            <p className="mb-5 text-center text-xl font-semibold">Add api</p>
            <Row gutter={{ xl: 24 }}>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="text"
                  name="companyName"
                  label="Company Name	"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="apiName" label="API Name	" />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="text"
                  name="publishableKey"
                  label="Publishable Key"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="password"
                  name="secretKey"
                  label="Secret Key	"
                />
              </Col>
              <Col className="gutter-row justify-end " span={24}>
                <Button htmlType="submit" type="primary">
                  Create
                </Button>
              </Col>
            </Row>
          </div>
        </CustomForm>
      </Modal>
    </div>
  );
};

export default ApiListPage;

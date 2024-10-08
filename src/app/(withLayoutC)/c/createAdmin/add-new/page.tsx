"use client";

import React from "react";
import Link from "next/link";
import { Button, Col, Row, message } from "antd";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";

const AddNewAdminPage = () => {
  const onSubmit = async (values: any) => {
    const { password, rePassword, ...remainingData } = values;
    message.success("User created successfully!");
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Create Sub-Admin" />

      <div className="-mt-2 mb-4 flex items-center justify-end gap-3">
        <Link href={"/c/createAdmin"}>
          <Button
            style={{ background: "#FFB200" }}
            type="primary"
            size={"middle"}
          >
            Back
          </Button>
        </Link>
      </div>
      <div>
        <CustomForm className="w-full" onSubmit={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              User Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px"
                }}
              >
                <CustomInput type="text" name="name" label="Name" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="text"
                  name="userName"
                  label="User Name"
                  placeholder="Enter your name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="loginUrl" label="Login Url" />
              </Col>
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </CustomForm>
      </div>
    </div>
  );
};

export default AddNewAdminPage;

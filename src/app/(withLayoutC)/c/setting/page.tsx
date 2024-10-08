"use client";
import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";
import CustomSelect from "@/components/ui/CustomSelect";
import { Button, Divider, Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import sucImg from "../../../../../public/images/check.png";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { MdDelete } from "react-icons/md";

type Admin = {
  id: number;
  gmail: string;
  isActive: boolean;
};

const SettingPage = () => {
  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Settings" />
      <div className="mx-auto p-2 md:p-10 xl:w-[70%] xl:p-20">
        <div className="flex justify-between gap-1">
          <ForgotPassModal />
          <ChangePassModal />
          <AccountChangeModal />
        </div>
      </div>
    </div>
  );
};

const ForgotPassModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState("forgotPassword");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setDirection("forgotPassword");
    setIsModalOpen(false);
  };
  const onSubmitForm = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Button className="bg-blue-500 text-white" onClick={showModal}>
        Forget Password
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={500}
        centered
      >
        {direction === "forgotPassword" && (
          <div>
            <div className="space-y-3 bg-slate-300 p-10 text-center">
              <h2 className="text-xl font-semibold">Verify it is you</h2>
              <p>
                We have sent a verification code in your email <br />{" "}
                n*****@*******.com
              </p>
              <p>Enter the code from the email in the field below</p>
              <form className="mx-auto w-1/2">
                <input
                  type="text"
                  name="code"
                  className="w-full p-2 outline-none"
                />
                <Button
                  onClick={() => setDirection("newPassword")}
                  className="mx-auto mt-3"
                >
                  Verify
                </Button>
              </form>
            </div>
            <div className="mt-3 text-center">
              <p>
                Did not recive an email?
                <br />
                <span className="cursor-pointer text-blue-400">Try Again </span>
                Or
                <span className="cursor-pointer text-blue-400"> Cancel</span>
              </p>
            </div>
          </div>
        )}
        {direction === "newPassword" && (
          <div>
            <CustomForm onSubmit={onSubmitForm}>
              <CustomInput type="password" name="password" label="Password" />
              <CustomInput
                type="password"
                name="ConfirmPassword"
                label="Confirm Password"
              />
              <button
                onClick={() => setDirection("success")}
                className="w-full bg-blue-500 px-3 py-2 text-white"
              >
                Submit
              </button>
            </CustomForm>
          </div>
        )}
        {direction === "success" && (
          <SuccessPopUp
            title="Your Password Has Been Changed!"
            onClick={handleCancel}
          />
        )}
      </Modal>
    </>
  );
};
const AccountChangeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState("verify");
  const [error, setError] = useState("");
  const [admins, setAdmins] = useState([
    {
      id: 1,
      gmail: "sayed@gmail.com",
      isActive: false,
    },
    {
      id: 2,
      gmail: "almun@gmail.com",
      isActive: false,
    },
  ]);
  const showModal = () => {
    setIsModalOpen(true);
    setError("");
  };

  const handleCancel = () => {
    setDirection("verify");
    setIsModalOpen(false);
  };
  const onSubmitForm = (data: any) => {
    if (!data.gmail || !data.password || !data.confirmPass) {
      setError("Please Fill Up Required Field!");
      return;
    }
    if (data.password !== data.confirmPass) {
      setError("Password did not matched!");
      return;
    }
    setError("");
    setAdmins([...admins, data]);
    setDirection("success");
  };

  const handleSetActive = (checked: boolean, id: number) => {
    const targetAdmin = admins.find((admin) => admin.id === id);
    const restAdmin = admins.filter((admin) => admin.id !== id);

    setAdmins([
      ...restAdmin,
      {
        ...(targetAdmin as Admin),
        isActive: checked,
      },
    ]);
  };

  return (
    <>
      <Button className="bg-blue-500 text-white" onClick={showModal}>
        Account Change
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={600}
        centered
      >
        {direction === "verify" && (
          <div>
            <div className="space-y-3 bg-slate-300 p-10 text-center">
              <h2 className="text-xl font-semibold">Verify it is you</h2>
              <p>
                We have sent a verification code in your email <br />{" "}
                n*****@*******.com
              </p>
              <p>Enter the code from the email in the field below</p>
              <form className="mx-auto w-1/2">
                <input
                  type="text"
                  name="code"
                  className="w-full p-2 outline-none"
                />
                <Button
                  onClick={() => setDirection("newPassword")}
                  className="mx-auto mt-3"
                >
                  Verify
                </Button>
              </form>
            </div>
            <div className="mt-3 text-center">
              <p>
                Did not recive an email?
                <br />
                <span className="cursor-pointer text-blue-400">Try Again </span>
                Or
                <span className="cursor-pointer text-blue-400"> Cancel</span>
              </p>
            </div>
          </div>
        )}
        {direction === "newPassword" && (
          <div className="pt-5">
            <div className="">
              <label htmlFor="url">Admin Login Url</label>
              <div className="flex items-center gap-2">
                <input
                  className="flex-1 bg-yellow-200 p-2 text-black outline-1"
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Enter Admin Url"
                />
                <button className="rounded bg-blue-500 p-3  uppercase text-white">
                  save
                </button>
              </div>
            </div>
            {/*  */}
            <Divider />
            <div>
              <h2 className="font-semibold">Add Admin</h2>
              <CustomForm onSubmit={onSubmitForm}>
                <CustomInput label="gmail" name="gmail" type="input" />
                <CustomInput label="password" name="password" type="password" />
                <CustomInput
                  label="confirmPass"
                  name="confirmPass"
                  type="password"
                />
                {error && <p className="mb-3 text-red">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-blue-500 px-3 py-2 text-white"
                >
                  ADD
                </button>
              </CustomForm>
            </div>

            <Divider />
            <div className="space-y-4">
              {admins.map((admin) => (
                <div key={admin.id} className="flex items-center gap-2">
                  <h2 className="flex-1 rounded bg-blue-800 px-3 py-2 text-xl font-semibold text-white">
                    {admin.gmail}
                  </h2>
                  <div className="flex w-[20%] items-center gap-1">
                    <label className="flex cursor-pointer select-none items-center">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={admin.isActive}
                          onChange={(e) =>
                            handleSetActive(e.target.checked, admin.id)
                          }
                          className="sr-only"
                        />
                        <div
                          className={`box block h-8 w-14 rounded-full ${admin.isActive ? "bg-green-500" : "bg-slate-400"
                            }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center  rounded-full bg-white  transition ${admin.isActive ? "translate-x-full" : ""
                            }`}
                        ></div>
                      </div>
                    </label>
                    <MdDelete size={30} className="text-rose-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {direction === "success" && (
          <SuccessPopUp
            title="Your Password Has Been Changed!"
            onClick={handleCancel}
          />
        )}
      </Modal>
    </>
  );
};

const ChangePassModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState("changePass");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setDirection("changePass");
    setIsModalOpen(false);
  };
  const onSubmitForm = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Button className="bg-blue-500 text-white" onClick={showModal}>
        Change Password
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={500}
        centered
      >
        {direction === "changePass" && (
          <div className=" space-y-5 text-center">
            <h1 className=" bg-blue-700  p-3 text-2xl text-white">
              Change Your Password
            </h1>
            <span>Please Enter Your New Password</span>
            <CustomForm onSubmit={onSubmitForm}>
              <CustomInput
                type="password"
                name="currentPassword"
                label="Current Password"
              />
              <CustomInput
                type="password"
                name="newPass"
                label="New Password"
              />
              <CustomInput
                type="password"
                name="repeatNewPass"
                label="Repeat New Password"
              />
              <button
                onClick={() => setDirection("success")}
                className="w-full bg-blue-500 px-3 py-2 text-white"
              >
                Change Password
              </button>
            </CustomForm>
            <p className="cursor-pointer text-blue-400" onClick={handleCancel}>
              Cancel
            </p>
          </div>
        )}
        {direction === "success" && (
          <SuccessPopUp
            title="Your Password Has Been Changed!"
            onClick={handleCancel}
          />
        )}
      </Modal>
    </>
  );
};

const SuccessPopUp = ({ title, onClick }: { title: string; onClick?: any }) => {
  return (
    <div className="space-y-4 text-center">
      <Image
        src={sucImg}
        height={100}
        width={100}
        className="mx-auto"
        alt="success"
      />
      <h2 className="text-xl font-semibold">Success!</h2>
      <p>{title}</p>
      <button
        onClick={onClick}
        className="w-full  bg-green-500 px-3 py-2 font-semibold text-white"
      >
        Done
      </button>
    </div>
  );
};

export default SettingPage;

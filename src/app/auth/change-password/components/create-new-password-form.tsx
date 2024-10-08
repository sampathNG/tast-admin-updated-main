"use client";

import { Form, Formik } from "formik";
import TextInput from "../../../(withLayoutC)/c/components/TextInput";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ChangePasswordFormValidationSchema } from "../lib/validate";
import { useState } from "react";
import { useRouter } from "next/navigation";
import icon1 from "@/../public/icons/message.svg"

function CreateNewPassword() {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Formik
      initialValues={{
        newpassword: "",
        confirmpassword: "",
      }}
      validationSchema={toFormikValidationSchema(
        ChangePasswordFormValidationSchema
      )}
      onSubmit={async (values) => {
        const mail = localStorage.getItem("email");
        const newValues = { ...values, email: mail };

        setIsSubmitting(true);

        await fetch("https://tast-pwvf.onrender.com/user/reset/password", {
          method: "POST",
          body: JSON.stringify(newValues),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);

            if (data.status && data.status_code === 200) {
              router.push("/success-password");
            } else {
              setErrMsg(data.message);
            }

            setIsSubmitting(false);
          })
        );
      }}
    >
      <Form>
        {errMsg && <p className="mb-2 text-red-500">{errMsg}</p>}
        <div className="flex flex-col 2xl:gap-y-[3.063rem] gap-y-10">
          <TextInput
            label="New Password"
            name="newpassword"
            type="password"
            icon={icon1}
            placeholder="password"
          />
          <TextInput
            label="Confirm Password"
            name="confirmpassword"
            type="password"
            icon={icon1}
            placeholder="password"
          />
        </div>

        <div className="flex justify-center 2xl:mt-[6.063rem] mt-[2rem]">
          <button
            type="submit"
            className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold"
          >
            {isSubmitting ? "Waiting..." : "Continue"}
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default CreateNewPassword;

"use client";

import { Form, Formik } from "formik";
import TextInput from "../../../(withLayoutC)/c/components/TextInput";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ForgotPasswordFormValidationSchema } from "../lib/validate";
import { useState } from "react";
import { useRouter } from "next/navigation";
import icon1 from "@/../public/icons/message.svg"

function ForgotPasswordForm() {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={toFormikValidationSchema(
        ForgotPasswordFormValidationSchema
      )}
      onSubmit={async (values, { setSubmitting }) => {
        localStorage.setItem("email", values.email);
        fetch("https://tast-pwvf.onrender.com/user/forgot/password", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);

            if (data.status && data.status_code === 200) {
              router.push("/otp-verify");
            } else {
              setErrMsg(data.message);
            }
          })
        );

        setSubmitting(false);
      }}
    >
      <Form>
        <div className="flex flex-col gap-y-[3.063rem]">
        
          <TextInput
            label="Email"
            name="email"
            icon={icon1}
            placeholder="email"
            type="text"
          />
        </div>

        <div className="flex justify-center mt-[1.625rem] 2xl:mt-[2.5rem]">
          <button
            type="submit"
            className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[0.46rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold mt-10 inline-block"
     >
            Reset
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ForgotPasswordForm;
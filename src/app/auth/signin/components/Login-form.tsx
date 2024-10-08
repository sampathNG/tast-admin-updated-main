"use client";

import { Form, Formik } from "formik";
import TextInput from "../../../(withLayoutC)/c/components/TextInput";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { SignInFormValidationSchema } from "../lib/validate";
import { useState } from "react";
import { useRouter } from "next/navigation";
import icon1 from "@/../public/icons/message.svg"
import icon2 from "@/../public/icons/password-check.svg"
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={toFormikValidationSchema(SignInFormValidationSchema)}
      onSubmit={async (values) => {
        setIsSubmitting(true);
        fetch("https://tast-pwvf.onrender.com/user/login", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);

            if (data.status && data.status_code === 200) {
              localStorage.setItem("userid", data.data.userDetails._id);
              localStorage.setItem("token", data.data.token);
              router.push("/success-login");
            } else {
              setErrMsg(data.message);
            }
            setIsSubmitting(false);
          })
        );
      }}
    >
      <Form>
        {errMsg && <p className="text-center mb-2 text-red-500">{errMsg}</p>}

        <div className="flex flex-col gap-y-8 2xl:gap-y-[3.063rem]">
          <TextInput
            label="Email"
            name="email"
            placeholder="user name"
            icon={icon1}
            type="text"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            icon={icon2}
            placeholder="password"
          />
        </div>
        <div className="flex justify-between mt-2 px-5 text-sm">
          <Link href="/forgot-password" className="text-[#0077B6]">
            Forgot Password?
          </Link>
          <div className="flex gap-x-1">
            <input type="checkbox" id="recall" />
            <label htmlFor="recall">Remember Me</label>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-[2.625rem]">
          <button
            type="submit"
            className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;
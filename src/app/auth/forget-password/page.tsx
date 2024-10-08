import ForgotPasswordForm from "./components/forgot-password-form";

function ForgetPassword() {
  return (
    <>
      <header className="text-center 2xl:mb-[78px] mb-10">
        <h1 className="text-xl font-extrabold lg:text-2xl 2xl:text-[40px] 2xl:leading-[97.52px] mb-[13px]">
          Forget password
        </h1>
        <p className="sm:text-[18px] 2xl:text-[18px] ">
          Enter your valid email address where you receive otp.
        </p>
      </header>
      <main>
        <ForgotPasswordForm />
      </main>
    </>
  );
}

export default ForgetPassword;
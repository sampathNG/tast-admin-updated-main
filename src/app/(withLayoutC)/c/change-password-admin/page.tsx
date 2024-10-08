import ChangeOldPassword from "./components/change-old-password-form";

function ChangePasswordAdmin() {
  return (
    <>
      <header className="text-center 2xl:mb-[78px] mb-10">
        <h1 className="text-2xl font-extrabold lg:text-2xl 2xl:text-[40px] 2xl:leading-[97.52px] mb-[13px]">
          Password Change
        </h1>
        <p className="sm:text-[18px] 2xl:text-[25px]">
          Please enter a password for your security.
        </p>
      </header>

      <main>
        <ChangeOldPassword />
      </main>
    </>
  );
}

export default ChangePasswordAdmin;

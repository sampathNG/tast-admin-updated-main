import React, {
  ButtonHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
} from "react";
import { ImSpinner9 } from "react-icons/im";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleBtn?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  className?: string;
}

const PrimaryButton = ({
  text,
  handleBtn,
  loading,
  className,
  ...rest
}: PrimaryButtonProps) => {
  return (
    <>
      {handleBtn ? (
        <button
          {...rest}
          disabled={loading}
          onClick={handleBtn}
          className={`${
            loading ? "bg-slate-300 text-slate-600" : "bg-[#FFB200]"
          } text-P-Black inline-block px-5 py-3  text-xs text-white md:text-lg ${className} flex items-center justify-center rounded uppercase hover:font-semibold`}
        >
          {(loading as boolean) ? (
            <ImSpinner9 className="animate-spin" />
          ) : (
            text
          )}
        </button>
      ) : (
        <button
          {...rest}
          disabled={loading}
          className={`${
            loading ? "bg-slate-300 text-slate-600" : "bg-[#FFB200]"
          } text-P-Black inline-block px-5 py-3 text-xs text-white md:text-lg ${className} flex items-center justify-center rounded uppercase hover:font-semibold`}
        >
          {loading ? <ImSpinner9 className="animate-spin" /> : text}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;

// const PrimaryButton = ({ text }: { text: string }) => {
//   return (
//     <button className="mt-4 flex w-40 items-center justify-center gap-2 rounded-md border  border-indigo-500 bg-indigo-600 p-2 px-4 text-lg font-semibold text-white hover:bg-indigo-100">
//       {text}
//     </button>
//   );
// };

// export default PrimaryButton;

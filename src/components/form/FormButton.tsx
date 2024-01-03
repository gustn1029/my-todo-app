import classNames from "classnames";
import React, { KeyboardEvent } from "react";

interface BProps {
  className?: string;
  text?: string;
  type?: "button" | "submit";
  isDelete?: boolean;
  onKeyDown?: (e:KeyboardEvent<HTMLButtonElement>) => void
  [x: string]: any;
}

const FormButton = ({
  type = "button",
  className = "",
  text = "",
  isDelete = false,
  onKeyDown,
  ...restProps
}: BProps) => {
  return (
    <button type={type} onKeyDown={onKeyDown} className={classNames(className, `w-[100px] shadow-md rounded-lg font-semibold border ${isDelete ? 'border-red-300 text-red-500 hover:bg-red-500': 'border-slate-300 text-slate-500 hover:bg-slate-500'}  hover:text-white`)} {...restProps}>
      {text}
    </button>
  );
};

export default FormButton;

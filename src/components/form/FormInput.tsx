import classNames from "classnames";
import React, { ChangeEvent } from "react";

interface IProps {
  type?: "text" | "number";
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  divClassName?:string;
  placeHolder?: string;
  name: string;
  id?: string;
  isHidden?: boolean;
  [x: string]: any;
}

const FormInput = ({
  type = "text",
  inputValue = "",
  onChange,
  label = "",
  divClassName="",
  labelClassName = "",
  inputClassName = "",
  name = "",
  placeHolder = "",
  id = "",
  isHidden = false,
  ...restProps
}: IProps) => {
  return (
    <div className={classNames(divClassName, ``)}>
      <label
        htmlFor={name}
        className={classNames(
          labelClassName,
          `${isHidden ? "hidden" : "block"}`
        )}
      >
        {label !== "" ? label : name}
      </label>
      <input
        type={type}
        className={classNames(inputClassName, `block outline-none shadow-md`)}
        placeholder={placeHolder}
        onChange={onChange}
        value={inputValue}
        name={name}
        id={name}
        {...restProps}
      />
    </div>
  );
};

export default FormInput;

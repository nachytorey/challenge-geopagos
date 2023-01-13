import React from "react";
import { FC } from "react";
import InputMask from "react-input-mask";

type InputHTMLProps = React.HTMLProps<HTMLInputElement>;

interface InputProps extends InputHTMLProps {
  type?: string;
  error?: string;
  helperText?: string;
  label?: string;
  placeHolder?: string;
  className?: string;
  mask?: string;
  maxLength?: number;
}

const Input: FC<InputProps> = ({
  type = "text",
  helperText,
  label,
  placeHolder,
  className,
  mask = "",
  maxLength = 100,
}) => {
  return (
    <div className={"my-5"}>
      {label && <p className="form-label">{label}</p>}
      {type === "text" ? (
        <input
          type={type}
          placeholder={placeHolder}
          className={className}
          maxLength={maxLength}
        />
      ) : (
        <InputMask
          mask={mask}
          placeholder={placeHolder}
          className={className}
          maskChar={null}
        />
      )}
      <p className="helperText pt-1">{helperText}</p>
    </div>
  );
};

export default Input;

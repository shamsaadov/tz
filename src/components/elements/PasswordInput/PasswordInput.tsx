import { useState } from "react";
import OpenEye from "../../icons/OpenEye.tsx";
import ClosedEye from "../../icons/ClosedEye.tsx";
import {
  EyeIcon,
  PasswordInputStyles,
  Wrapper,
} from "./PasswordInput.styles.ts";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Label } from "../Label/Label.tsx";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.tsx";

type InputProps = {
  name?: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  type?: "password" | "text";
  label: string;
  isInvalid?: boolean;
  disabled?: boolean;
  error?: FieldError | string;
};

const PasswordInput = (props: InputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Wrapper>
      <Label label={props.label}>
        <PasswordInputStyles
          name={props.name}
          type={passwordShown ? "text" : "password"}
          error={props.error}
          placeholder={props.placeholder}
          {...props.register}
        />
        <EyeIcon onClick={togglePasswordVisibility}>
          {passwordShown ? <OpenEye /> : <ClosedEye />}
        </EyeIcon>
        {props.error != null && (
          <ErrorMessage
            message={
              typeof props.error === "string"
                ? props.error
                : props.error?.message
            }
          />
        )}
      </Label>
    </Wrapper>
  );
};

export default PasswordInput;

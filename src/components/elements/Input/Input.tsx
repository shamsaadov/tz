import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputStyled } from "./Input.styles";
import InputMask from "react-input-mask";

type InputProps = {
  name?: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  type?: "password" | "text";
  isInvalid?: boolean;
  disabled?: boolean;
  mask?: string | Array<string | RegExp>;
  error?: FieldError | string;
};

export function Input({ register, type, mask, error, ...rest }: InputProps) {
  if (mask != null) {
    return (
      <InputStyled
        error={error}
        as={InputMask}
        mask={mask}
        {...rest}
        {...register}
      />
    );
  }

  return <InputStyled type={type} error={error} {...register} {...rest} />;
}

import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { TextFieldContainer } from "./TextField.styles";

type TextFieldProps = {
  label?: string;
  error?: FieldError | string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  rows?: number;
  type?: "password" | "text";
  disabled?: boolean;
  mask?: string | Array<string | RegExp>;
};

export function TextField(props: TextFieldProps) {
  const { label, error, ...rest } = props;
  const isInvalid = !!error;

  return (
    <TextFieldContainer data-element="text-field">
      <Label label={label} isInvalid={isInvalid}>
        <Input error={error} {...rest} />
        {error != null && (
          <ErrorMessage
            message={typeof error === "string" ? error : error?.message}
          />
        )}
      </Label>
    </TextFieldContainer>
  );
}

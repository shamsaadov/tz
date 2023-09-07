import { MouseEventHandler } from "react";
import { ButtonStyled } from "./Button.styles.ts";

interface Props {
  title: string;
  disabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset";
}
const Button = (props: Props) => {
  return (
    <ButtonStyled
      type={props.type}
      disabled={props.disabled}
      title={props.title}
    >
      {props.title}
    </ButtonStyled>
  );
};

export default Button;

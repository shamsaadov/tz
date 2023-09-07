import { LabelContainer, LabelText } from "./Label.styles";
import { ReactNode } from "react";

export type LabelProps = {
  label?: string;
  className?: string;
  isInvalid?: boolean;
  children?: ReactNode;
};

export function Label({ isInvalid, label, className, children }: LabelProps) {
  return (
    <LabelContainer className={className}>
      {!!label && <LabelText isInvalid={isInvalid}>{label}</LabelText>}
      {children}
    </LabelContainer>
  );
}

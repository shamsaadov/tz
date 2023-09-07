import styled from "styled-components";
import { FieldError } from "react-hook-form";

export const InputStyled = styled.input<{ error?: FieldError | string }>`
  border: 1px solid ${(props) => (props.error ? "#ee8c8c" : "#e7e7e7")};
  color: ${(props) => (props.error ? "#ee8c8c" : "#000")};
  border-radius: 8px;
  font-size: 14px;
  padding: 14px 16px;
  &:disabled {
    cursor: not-allowed;
  }
`;

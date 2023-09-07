import styled from "styled-components";
import { FieldError } from "react-hook-form";

export const PasswordInputStyles = styled.input<{
  error?: FieldError | string;
}>`
  display: flex;
  width: 353px;
  border: 1px solid ${(props) => (props.error ? "#ee8c8c" : "#e7e7e7")};
  color: ${(props) => (props.error ? "#ee8c8c" : "#000")};
  border-radius: 8px;
  font-size: 14px;
  padding: 14px 16px;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const EyeIcon = styled.span`
  position: absolute;
  top: 55%;
  left: 90%;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

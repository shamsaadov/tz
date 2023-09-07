import styled from "styled-components";
import { LabelProps } from "./Label";

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.span<LabelProps>`
  display: block;
  font-size: 14px;
  line-height: 1.3571428571;
  margin-bottom: 5px;
  border: ${(props) =>
    props?.isInvalid &&
    `
     color: #ee8c8c
  `};
`;

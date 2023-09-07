import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 353px;
  padding: 17px 152px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #000;
  color: #fff;
  border: none;
  &:disabled {
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

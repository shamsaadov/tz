import { ErrorContainer, ErrorMessageText } from "./ErrorMessage.styles";

export type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <ErrorContainer>
      <ErrorMessageText>{message}</ErrorMessageText>
    </ErrorContainer>
  );
};

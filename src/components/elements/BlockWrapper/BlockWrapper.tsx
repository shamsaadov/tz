import { ReactNode } from "react";
import {
  BottomStar,
  Content,
  Title,
  TopFirstStar,
  TopSecondStar,
  Wrapper,
} from "./BlockWrapper.styles";
import StarIcon from "../../icons/StarIcon.tsx";

interface Props {
  title: string;
  children: ReactNode;
}

export const BlockWrapper = (props: Props) => {
  return (
    <Wrapper>
      <BottomStar>
        <StarIcon />
      </BottomStar>
      <TopFirstStar>
        <StarIcon />
      </TopFirstStar>
      <TopSecondStar>
        <StarIcon />
      </TopSecondStar>

      <Title>{props.title}</Title>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

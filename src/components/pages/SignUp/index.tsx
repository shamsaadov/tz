import Aside from "../../elements/Aside/Aside.tsx";
import SignUp from "./SignUp.tsx";
import { Wrapper } from "./SignUp.styles.ts";

const SignUpScreen = () => {
  return (
    <Wrapper>
      <Aside />
      <SignUp />
    </Wrapper>
  );
};

export default SignUpScreen;

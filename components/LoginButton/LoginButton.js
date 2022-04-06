import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <LoginContainer>
        <SignButton
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
        >
          Sign out
        </SignButton>
      </LoginContainer>
    );
  }
  return (
    <LoginContainer>
      <SignButton onClick={() => signIn()}>Sign in</SignButton>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  margin-bottom: 15vh;
`;
const SignButton = styled.button`
  width: fit-content;
  box-shadow: 0px 1px 0px 0px #1c1b18;
  background: linear-gradient(to bottom, #1a1404 5%, #1d508f 100%);
  background-color: #1a1404;
  border-radius: 18px;
  border: 1px solid #141007;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Courier New;
  font-size: 16px;
  font-weight: normal;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #000000;

  .button:hover {
    background: linear-gradient(to bottom, #1d508f 5%, #1a1404 100%);
    background-color: #1d508f;
  }
  .button:active {
    position: relative;
    top: 1px;
  }
`;

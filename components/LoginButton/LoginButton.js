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
  margin: 2vh 0 10vh 0;
  align-items: center;
`;
const SignButton = styled.button`
  width: fit-content;
  font-size: 2vh;
  border-radius: 1rem;
  color: #0b2b40;
  background-color: white;
  padding: 1vh;
`;

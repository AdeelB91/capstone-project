import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <LoginContainer>
        <span>Signed in</span>
        <button onClick={() => signOut()}>Sign out</button>
      </LoginContainer>
    );
  }
  return (
    <LoginContainer>
      <span>Not signed in</span>
      <button onClick={() => signIn()}>Sign in</button>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
`;

// {session.user.name}

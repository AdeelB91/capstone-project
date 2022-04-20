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
  width: 180px;
  padding: 10px;
  border: none;
  outline: none;
  color: black;
  background: white;
  cursor: pointer;
  position: relative;
  border: black solid 1.6px;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 0;
  border-radius: 10px;

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :active {
    color: #000;
  }

  :active:after {
    background: transparent;
  }

  :hover:before {
    opacity: 1;
  }

  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

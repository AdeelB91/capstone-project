import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();

  return (
    <AppHeader>
      <Image
        alt="App Logo"
        src={"/SVG/newlogobeige.svg"}
        width={35}
        height={45}
      />
      <h1>
        DILEMMA<span style={{ color: "black" }}>20</span>
      </h1>
      <div>
        <SignOutButton
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          color="black"
        />
      </div>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 2px;
  position: relative;
  background-color: white;
  padding: 1.5vh 1vh 0.5vh;
  background-color: white;

  h1 {
    letter-spacing: 3px;
  }

  > div {
    cursor: pointer;
  }
`;

const SignOutButton = styled(RiLogoutBoxRLine)`
  font-size: 27px;
  @media screen and (min-width: 700px) {
    font-size: 40px;
  }
`;

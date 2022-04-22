import styled from "styled-components";
import { GoSignOut } from "react-icons/go";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();

  return (
    <AppHeader>
      {/* <LogoImage
        alt="App Logo"
        src={"/SVG/bluelogo.svg"}
        width={30}
        height={40}
      /> */}
      <NameImage
        alt="App Name"
        src={"/SVG/schriftheader.svg"}
        width={250}
        height={49}
      />

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
  padding: 1h;
  border-bottom: solid 2px;
  justify-content: center;
  position: relative;
  background-color: white;

  > div {
    cursor: pointer;
    position: absolute;
    right: 0;
  }
`;

const LogoImage = styled(Image)``;
const NameImage = styled(Image)``;

const SignOutButton = styled(RiLogoutBoxRLine)`
  font-size: 27px;
  @media screen and (min-width: 700px) {
    font-size: 40px;
  }
`;

import styled from "styled-components";
import { GoSignOut } from "react-icons/go";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();

  return (
    <AppHeader>
      <LogoImage
        alt="App Logo"
        src={"/SVG/bluelogo.svg"}
        width={30}
        height={40}
      />
      <NameImage alt="App Name" src={"/SVG/blue.svg"} width={250} height={50} />

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
  background-color: white;
  height: 8vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.8vh;
  border-bottom: solid 2px;

  > div {
    cursor: pointer;
  }
`;

const LogoImage = styled(Image)``;
const NameImage = styled(Image)``;

const SignOutButton = styled(GoSignOut)`
  font-size: 30px;
  @media screen and (min-width: 700px) {
    font-size: 40px;
  }
`;

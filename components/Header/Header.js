import styled from "styled-components";
import { GoSignOut } from "react-icons/go";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();

  return (
    <AppHeader>
      <Image src={"/SVG/bluelogo.svg"} width={40} height={50} />
      <Image src={"/SVG/blue.svg"} width={220} height={65} />

      <div>
        <GoSignOut
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          color="black"
          size={25}
        />
      </div>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background-color: white;
  height: 7.5vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.8vh;
  border-bottom: solid 2px;

  > div {
    cursor: pointer;
  }
`;

const AppTitle = styled.h1`
  margin-top: 1vh;
`;

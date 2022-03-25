import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <>
      <Nav>
        <li>
          <Link href="/">
            <a>
              Home
              {/* <Image
                src="/Images/round_home_white_24dp.png"
                alt="Homeicon"
                width={100}
                height={100}
              /> */}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <a>Create-Page</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
      </Nav>
    </>
  );
}

const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: yellow;
`;

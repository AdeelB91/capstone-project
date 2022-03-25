import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Nav>
        <li>
          <Link href="/">
            <a>Home</a>
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
`;

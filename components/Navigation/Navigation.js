import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <Nav>
        <Link href="/" passHref>
          <IconLink className={router.pathname == "/" ? "active" : ""}>
            <Image
              alt="homeicon"
              src="/SVG/home_black_24dp.svg"
              width={40}
              height={40}
            />
          </IconLink>
        </Link>
        <Link href="/create" passHref>
          <IconLink className={router.pathname == "/create" ? "active" : ""}>
            <Image
              alt="addPostIcon"
              src="/SVG/add_circle_black_24dp.svg"
              width={38}
              height={38}
            />
          </IconLink>
        </Link>
        <Link href="/profile" passHref>
          <IconLink className={router.pathname == "/profile" ? "active" : ""}>
            <Image
              alt="profileIcon"
              src="/SVG/person_black_24dp.svg"
              width={40}
              height={40}
            />
          </IconLink>
        </Link>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  padding: 1vh;
  height: 7vh;
  border-top: ridge 1.5px lightgrey;
`;

const IconLink = styled.a`
  display: flex;
  flex-direction: column;
  opacity: 0.5;

  &.active {
    /* border: solid white 2px;
    border-radius: 5px; */
    opacity: 1;
  }
`;

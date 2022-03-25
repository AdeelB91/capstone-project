import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Nav>
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 0 24 24"
              width="35px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
            </svg>
          </a>
        </Link>
        <Link href="/create">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 0 24 24"
              width="35px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z" />
            </svg>
          </a>
        </Link>
        <Link href="/profile">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 0 24 24"
              width="35px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
            </svg>
          </a>
        </Link>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: black;
  padding: 10px;
`;

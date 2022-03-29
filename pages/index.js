import Head from "next/head";
import Link from "next/link";
import CreatePage from "./create";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>RatingApp</title>
      </Head>
      <h1>Homepage</h1>
    </>
  );
}

const AppHeader = styled.header`
  background-color: darkblue;
  height: 100px;
  display: flex;
  align-items: center;
`;

const AppTitle = styled.h1`
  color: white;
`;

import Head from "next/head";
import styled from "styled-components";
import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>RatingApp</title>
      </Head>
      <Header />
      <h1>Homepage</h1>
      <Navigation />
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

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

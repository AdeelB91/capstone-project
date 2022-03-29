import Head from "next/head";
import styled from "styled-components";
import LoginButton from "../components/LogInButton/LogInButton";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <Landingpage>
        <h2>App-Title</h2>
        <LoginButton />
      </Landingpage>
    </>
  );
}

const Landingpage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 100px;
  background: linear-gradient(180deg, #000000 0%, #809ab1 26.04%, #044179 100%);
  height: 100vh;

  > h2 {
    color: white;
  }
`;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

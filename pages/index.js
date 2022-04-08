import Head from "next/head";
import styled from "styled-components";
import LoginButton from "../components/LoginButton/LoginButton.js";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/homepage");
    }
  }, [session, router]);
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <Landingpage>
        <Image
          alt="App-Logo"
          src="/SVG/iwwa_lightbulb.svg"
          height={190}
          width={170}
        />
        <LoginButton />
      </Landingpage>
    </>
  );
}

const Landingpage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15vh;
  background: linear-gradient(180deg, #000000 0%, #809ab1 26.04%, #044179 100%);
  height: 100vh;
`;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

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
        <title>Capstone-Project| Sign In</title>
      </Head>
      <Landingpage>
        {/* <Image
          alt="App-Logo"
          src="/SVG/iwwa_lightbulb.svg"
          height={190}
          width={170}
        /> */}
        <LoginButton />
      </Landingpage>
    </>
  );
}

const Landingpage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18vh;
  padding-top: 40vh;
  background-image: url("/SVG/Vector 7.svg");
  background-size: 100%;
  background-repeat: space;
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

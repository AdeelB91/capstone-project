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
        <Container>
          <Image src={"/SVG/AppText.svg"} width={300} height={100} />
          <LoginButton />
        </Container>
      </Landingpage>
    </>
  );
}

const Landingpage = styled.div`
  background-image: url("/SVG/Vector 7.svg");
  background-size: 100%;
  background-repeat: space;
  background-position: fixed;
  height: 100vh;
  border: solid white 1px;
  margin-top: 18vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

import Head from "next/head";
import styled from "styled-components";
import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";
import useSWR from "swr";
import Image from "next/image";

export default function HomePage() {
  const posts = useSWR("/api/feed");

  return (
    <>
      <Head>
        <title>Capstone-Project| Home</title>
      </Head>
      <Header />
      <main>
        <Description>KEIN 20UHR DILEMMA,</Description>
        <Description>
          MIT DILEMMA<span style={{ color: "black" }}>20</span>!
        </Description>
        {posts.data ? <PostList posts={posts.data} /> : null}
      </main>
      <Navigation />
    </>
  );
}
const Description = styled.p`
  font-size: 1.6rem;
  margin: 3vh 0 2vh;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  color: #385782;
  font-weight: bold;
  letter-spacing: 2px;
  > p {
    color: black;
  }
`;
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

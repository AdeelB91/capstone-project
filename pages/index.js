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
        <Image
          alt="App Beschreibung"
          src={"/SVG/Description.svg"}
          width={375}
          height={85}
        />
        {/* <Description>Kein 20Uhr Dilemma mit Dilemma20</Description> */}
        {posts.data ? <PostList posts={posts.data} /> : null}
      </main>
      <Navigation />
    </>
  );
}
const Description = styled.h1`
  font-size: 1.5rem;
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

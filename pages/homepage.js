import Head from "next/head";
import styled from "styled-components";
import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>RatingApp</title>
      </Head>
      <Header />
      <main>
        {/* <Categories /> */}
        <PostList type="feed" />
      </main>
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

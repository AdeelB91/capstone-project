import Head from "next/head";
import styled from "styled-components";
import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";
import useSWR from "swr";

export default function HomePage() {
  const posts = useSWR("/api/feed");

  return (
    <>
      <Head>
        <title>Capstone-Project| Home</title>
      </Head>
      <Header />
      <main>
        {/* <Categories /> */}
        {posts.data ? <PostList posts={posts.data} /> : null}
      </main>
      <Navigation />
    </>
  );
}

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

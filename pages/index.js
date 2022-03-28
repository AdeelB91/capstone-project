import Head from "next/head";
import { Postform } from "../components/PostForm/PostForm";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>RatingApp</title>
      </Head>
      <AppHeader>
        <AppTitle>App-Title</AppTitle>
      </AppHeader>
      <Postform />
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

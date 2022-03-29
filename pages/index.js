import Head from "next/head";
import Link from "next/link";
import CreatePage from "./create";
import { Postform } from "../components/PostForm/PostForm";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>RatingApp</title>
      </Head>
      <h1>Homepage</h1>
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

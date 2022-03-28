import Head from "next/head";
import { Postform } from "../components/PostForm/PostForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>RatingApp</title>
      </Head>
      <h1>App-Title</h1>
      <Postform />
    </>
  );
}

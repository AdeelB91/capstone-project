import { getSession } from "next-auth/react";
import { PostForm } from "../components/PostForm/PostForm";
import Navigation from "../components/Navigation/Navigation";
import { useCreatePost } from "../utils/hooks/useCreatedPost";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Head from "next/head";

export default function CreatePage() {
  const { handleCreate, isCreating, error } = useCreatePost();
  return (
    <>
      <Head>
        <title>Capstone-Project| Beitrag erstellen</title>
      </Head>
      <Header />
      <main>
        <Breaker>
          <PageTitle>Teile deine Empfehlungen</PageTitle>
          <PostForm
            onSubmitPost={handleCreate}
            disabled={isCreating}
            submitText={isCreating ? "Beitrag wird erstellt..." : "Erstellen"}
            error={error}
            id="create"
          />
          {/* <Breaker /> */}
        </Breaker>
      </main>
      <Navigation />
    </>
  );
}

const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
  font-size: 24px;
  margin-bottom: 1vh;
`;

const Breaker = styled.div`
  height: 500px;
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

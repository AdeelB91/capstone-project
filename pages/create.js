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
      <CreateStylePage>
        <PageTitle>Teile deine Empfehlungen</PageTitle>
        <PostForm
          onSubmitPost={handleCreate}
          disabled={isCreating}
          submitText={
            isCreating ? "Beitrag wird erstellt..." : "Beitrag erstellen"
          }
          error={error}
          id="create"
        />
      </CreateStylePage>
      <Navigation />
    </>
  );
}

const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 10vh 0 3.6vh;
  font-size: 1.7rem;
`;
const CreateStylePage = styled.main``;

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

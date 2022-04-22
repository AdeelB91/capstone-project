import { getSession } from "next-auth/react";
import { PostForm } from "../components/PostForm/PostForm";
import Navigation from "../components/Navigation/Navigation";
import { useCreatePost } from "../utils/hooks/useCreatedPost";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";

export default function CreatePage() {
  const { handleCreate, isCreating, error } = useCreatePost();
  return (
    <>
      <Head>
        <title>Capstone-Project| Beitrag erstellen</title>
      </Head>
      <Header />
      <CreateStylePage>
        <PageTitle>TEILE DEINE EMPFEHLUNG</PageTitle>
        <PageTitle>GEGEN DAS 20 UHR DILEMMA!</PageTitle>

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
  margin: 3vh 1vh 2vh;
  font-size: 1.27rem;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  color: #385782;
  font-weight: bold;
  letter-spacing: 2px;

  @media screen and (min-width: 700px) {
    font-size: 2.3rem;
    margin: 3vh 0;
  }
`;
const CreateStylePage = styled.main`
  padding: 2vh 0 0;
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

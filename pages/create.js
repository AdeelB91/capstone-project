import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import { Postform } from "../components/PostForm/PostForm";
import Navigation from "../components/Navigation/Navigation";

export default function CreatePage() {
  return (
    <>
      <Header />
      <main>
        <Postform />
      </main>
      <Navigation />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

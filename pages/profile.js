import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";
import LoginButton from "../components/LogInButton/LogInButton";

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <h1>Profile</h1>
        <PostList />
        <LoginButton />
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

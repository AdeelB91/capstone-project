import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import LoginButton from "../components/LogInButton/LogInButton";
import Navigation from "../components/Navigation/Navigation";

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <h1>Profile-Page</h1>
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

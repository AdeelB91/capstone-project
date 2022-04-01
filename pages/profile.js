import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

export default function Profile() {
  return (
    <main>
      <Header />
      <h1>Profile-Page</h1>
      <Navigation />
    </main>
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

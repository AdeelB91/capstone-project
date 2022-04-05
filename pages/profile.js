import { getSession, useSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";
import LoginButton from "../components/LogInButton/LogInButton";
import styled from "styled-components";
export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <main>
        <ProfileHead>
          <h1>Profile</h1>
          <ProfileInfo>
            <img alt="profilepic" src={session.user.image} />
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
          </ProfileInfo>
        </ProfileHead>
        {/* test */}
        <PostList />
        <LoginButton />
      </main>
      <Navigation />
    </>
  );
}

const ProfileHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProfileInfo = styled.div`
  display: flex;
  margin: 2vh;
  align-items: center;
  gap: 1vh;
  > img {
    width: 40px;
    border-radius: 15px;
  }
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

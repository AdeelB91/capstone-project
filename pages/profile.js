import { getSession, useSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";
import LoginButton from "../components/LoginButton/LoginButton.js";
import styled from "styled-components";
import Image from "next/image";

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
            <Info>
              <h2>{session.user.name}</h2>
              <p>{session.user.email}</p>
            </Info>
          </ProfileInfo>
        </ProfileHead>
        {/* test */}
        <PostList />
        <SignOutButton>
          <LoginButton />
        </SignOutButton>
      </main>
      <Navigation />
    </>
  );
}

const SignOutButton = styled.div`
  display: flex;
  justify-content: center;
`;
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
    width: 50px;
    border-radius: 35px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: medium;
  }
  p {
    font-size: small;
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

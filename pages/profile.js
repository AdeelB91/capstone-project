import { getSession, useSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";
import styled from "styled-components";

export default function Profile() {
  const { data: session } = useSession();
  console.log();

  return (
    <>
      <Header />
      <main>
        <ProfileHead>
          <img alt="profilepic" src={session.user.image} />
          <Info>
            <h2>{session.user.name}</h2>
            <p>{session.user.email}</p>
          </Info>
        </ProfileHead>
        {/* test */}
        <PostList />
      </main>
      <Navigation />
    </>
  );
}

const ProfileHead = styled.div`
  display: flex;
  margin: 0.7rem 0.4rem 0.4rem 0.4rem;
  align-items: flex-end;
  gap: 1vh;
  > img {
    width: 70px;
    border-radius: 35px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: large;
  }
  p {
    font-size: medium;
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

import { getSession, useSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";
import styled from "styled-components";
import Head from "next/head";
import { RiBookMarkFill, RiContactsBook2Fill } from "react-icons/ri";
import useSWR from "swr";
import { useState } from "react";
import { Post } from "../components/Post/Post";

export default function Profile() {
  const bookmarkedPosts = useSWR("/api/bookmarked");
  const ownPosts = useSWR("/api/posts");

  const { data: session } = useSession();

  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(true);
  }
  function handleBookmarks() {
    setActive(false);
  }
  return (
    <>
      <Head>
        <title>Capstone-Project| Profile</title>
      </Head>
      <Header />
      <main>
        <ProfileHead>
          <img alt="profilepic" src={session.user.image} />
          <Info>
            <h2>{session.user.name}</h2>
            <p>{session.user.email}</p>
          </Info>
        </ProfileHead>
        <IconContainer>
          <ProfileIcon
            size={50}
            className={active === true ? "active" : ""}
            onClick={handleClick}
          />
          <BookmarkIcon
            size={50}
            className={!active === true ? "active" : ""}
            onClick={handleBookmarks}
          />
        </IconContainer>
        {active ? <PostList posts={ownPosts.data} /> : null}

        {!active ? <PostList posts={bookmarkedPosts.data} /> : null}
      </main>
      <Navigation />
    </>
  );
}

const ProfileHead = styled.div`
  display: flex;
  margin: 0.7rem 0 0rem 0.4rem;
  align-items: flex-end;
  gap: 1vh;
  position: relative;
  > img {
    width: 70px;
    border-radius: 35px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh;
  gap: 10vh;
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

const BookmarkIcon = styled(RiBookMarkFill)`
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
  }
`;

const ProfileIcon = styled(RiContactsBook2Fill)`
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
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

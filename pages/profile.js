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
          <ProfilePart>
            <img alt="profilepic" src={session.user.image} />
            <Info>
              <h2>{session.user.name}</h2>
              <p>{session.user.email}</p>
            </Info>
          </ProfilePart>
          <IconContainer>
            <ProfileIcon
              className={active === true ? "active" : ""}
              onClick={handleClick}
            />
            <BookmarkIcon
              className={!active === true ? "active" : ""}
              onClick={handleBookmarks}
            />
          </IconContainer>
        </ProfileHead>
        {active ? <PostList posts={ownPosts.data} /> : null}

        {!active ? <PostList posts={bookmarkedPosts.data} /> : null}
      </main>
      <Navigation />
    </>
  );
}

const ProfileHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
  position: relative;
  border: solid 1px white;
  background-color: white;
  background-color: white;
  gap: 5vh;
  padding: 1rem 1rem 0.7rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  @media screen and (min-width: 700px) {
    margin: 1vh 40vh 0.3vh;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10vh;
`;

const ProfilePart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > img {
    width: 85px;
    border-radius: 45px;
    @media screen and (min-width: 700px) {
      width: 110px;
      border-radius: 65px;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 2.4rem;
    @media screen and (min-width: 700px) {
      font-size: 3.5rem;
    }
  }
  p {
    font-size: 1rem;
    @media screen and (min-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;

const BookmarkIcon = styled(RiBookMarkFill)`
  cursor: pointer;
  opacity: 0.5;
  font-size: 50px;
  @media screen and (min-width: 700px) {
    font-size: 75px;
  }

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
  font-size: 50px;

  @media screen and (min-width: 700px) {
    font-size: 75px;
  }

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

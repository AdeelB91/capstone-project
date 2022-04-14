import { getSession, useSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import PostList from "../components/PostList/PostList";
import styled from "styled-components";
import Head from "next/head";
import { RiBookMarkFill } from "react-icons/ri";
import useSWR from "swr";
import { useState } from "react";

export default function Profile() {
  const users = useSWR("/api/users");
  const posts = useSWR("/api/posts");

  const { data: session } = useSession();

  const [active, setActive] = useState();

  let profileUser = undefined;

  if (users.data) {
    profileUser = users.data.find((user) => user._id === session.user.id);
  }

  let filteredArray;

  console.log(profileUser);

  function handleClick() {
    console.log(posts.data);
    if (posts.data) {
      filteredArray = posts.data.filter((post) => {
        return post._id === profileUser._id;
      });

      // console.log(profileUser, "user");
      // console.log(profileUser.bookmarkedPosts, "bookmark");
      console.log(filteredArray, "array");
    }
    setActive(true);
  }
  console.log(posts.data);
  console.log(filteredArray);

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
        <BookmarkIcon size={40} onClick={handleClick} />

        {active ? (
          <PostList posts={posts.data} />
        ) : (
          <PostList posts={posts.data} />
        )}
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

  &:hover {
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

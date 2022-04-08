import useSWR from "swr";
import { Post } from "../Post/Post";
import styled from "styled-components";
import { categories } from "../../categories";
import { useState } from "react";

export default function PostList({ type }) {
  const [categoryFilter, setCategoryFilter] = useState();
  // const [active, setActive] = useState(false);

  const posts = useSWR(type === "feed" ? "/api/feed" : "/api/posts");
  const filteredPosts = categoryFilter
    ? posts.data?.filter((post) => post.category === categoryFilter)
    : posts.data;
  function handleClick(category) {
    setCategoryFilter(category);
    // setActive(true);
    // console.log();
  }

  function handleShowAll() {
    setCategoryFilter(undefined);
  }
  console.log(categoryFilter);

  return (
    <>
      <CategoryContainer>
        <CategoryBar>
          {categories.map((category) => (
            <CategoryButton
              //           className={active === true ? "active" : ""}
              onClick={() => handleClick(category.name)}
              key={category.id}
              id={category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryBar>
        <div>
          <CategoryButton onClick={handleShowAll}>Show all</CategoryButton>
        </div>
      </CategoryContainer>
      {filteredPosts && Array.isArray(filteredPosts) ? (
        filteredPosts.length > 0 ? (
          <Ul>
            {filteredPosts.map((post) => (
              <li key={post._id}>
                <Post post={post} />
              </li>
            ))}
          </Ul>
        ) : (
          <div>No posts yet 🤷‍♂️</div>
        )
      ) : (
        <div>Loading…</div>
      )}
    </>
  );
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3vh;
  padding: 0;
  > li {
    flex: 1 0 30ch;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1vh;
  margin: 2vh 0;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  > div {
    margin-top: 2vh;
  }
`;

const CategoryBar = styled.div`
  display: flex;
  gap: 5vh;
`;

const CategoryButton = styled.button`
  width: fit-content;
  background-color: white;
  border: none;
  border-bottom: 1px solid;
  padding: 1px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
  &.active {
    background-color: lightblue;
    border: 1px solid black;
    padding: 2px;
    font-size: medium;
  }
`;

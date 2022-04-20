import useSWR from "swr";
import { Post } from "../Post/Post";
import styled from "styled-components";
import { categories } from "../../categories";
import { useState } from "react";

export default function PostList({ posts }) {
  const [categoryFilter, setCategoryFilter] = useState();
  const [active, setActive] = useState();

  const filteredPosts = categoryFilter
    ? posts?.filter((post) => post.category === categoryFilter)
    : posts;
  function handleClick(category) {
    setCategoryFilter(category);
    setActive(true);

    // console.log();
  }

  function handleShowAll() {
    setCategoryFilter(undefined);
    setActive(false);
  }
  console.log(categoryFilter);

  return (
    <>
      <CategoryContainer>
        <CategoryBar>
          {categories.map((category) => (
            <CategoryButton
              className={active === true ? "active" : ""}
              onClick={() => handleClick(category.name)}
              key={category.id}
              id={category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryBar>
        <div>
          <CategoryButton
            className={!active === true ? "active" : ""}
            onClick={handleShowAll}
          >
            Alle Empfehlungen
          </CategoryButton>
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
          <div>keine Beiträge vorhanden 🤷‍♂️</div>
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
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5vh;
  > li {
    padding: 0.5vh;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5vh;
  margin: 1vh 0;
  background-color: white;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  > div {
    margin: 2vh 0 1vh 0;
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
  font-size: 16px;

  cursor: pointer;

  &.hover {
    font-weight: bold;
    font-size: 18px;
  }
  &.active {
    font-weight: bold;
  }
`;

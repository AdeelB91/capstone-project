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
          <NoEntry>keine Beiträge vorhanden 🤷‍♂️</NoEntry>
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
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5vh;
  @media screen and (min-width: 700px) {
    margin: 5vh 45vh;
  }
  > li {
    padding: 1vh;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1vh 0 2vh;
  background-color: white;
  @media screen and (min-width: 700px) {
    margin: 0vh 40vh;
  }

  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  > div {
    margin: 2vh 0 0 0;
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
  font-size: 1.1rem;
  color: #385782;
  font-family: "Josefin Sans";

  @media screen and (min-width: 700px) {
    font-size: 1.5rem;
  }

  cursor: pointer;

  :hover {
    font-weight: bold;
    font-size: 1.2rem;
    @media screen and (min-width: 700px) {
      font-size: 1.7rem;
      font-weight: bold;
    }
  }
`;

const NoEntry = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 1rem 1rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  margin: 5vh;
  @media screen and (min-width: 700px) {
    margin: 5vh 40vh;
    font-size: 1.5rem;
  }
`;

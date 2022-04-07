import useSWR from "swr";
import { Post } from "../Post/Post";
import styled from "styled-components";
import { categories } from "../../categories";

export default function PostList({ type }) {
  const posts = useSWR(type === "feed" ? "/api/feed" : "/api/posts");

  function handleFilter(category) {
    //console.log(data);

    const filterposts = posts.data.filter((post) => post.category === category);
    console.log(filterposts);

    // setFilterList(filterposts);
    // data.filter((data.category) => data.category === "Bücher" ).map()
  }

  return (
    <>
      <CategoryBar>
        {categories.map((category) => (
          <button onClick={() => handleFilter(category.name)} key={category.id}>
            {category.name}
          </button>
        ))}
      </CategoryBar>
      {posts.data && Array.isArray(posts.data) ? (
        posts.data.length > 0 ? (
          <Ul>
            {posts.data.map((post) => (
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

const CategoryBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5vh;
  margin: 2vh 0;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  > button {
    width: fit-content;
    background-color: white;
    border: none;
    border-bottom: 1px solid;
    padding: 1px;
    cursor: pointer;

    &:hover {
      background-color: lightblue;
    }
    &:active {
      background-color: lightblue;
      border: 1px solid black;
      padding: 2px;
      font-size: medium;
    }
  }
`;

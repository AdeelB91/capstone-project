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
      {categories.map((category) => (
        <button onClick={() => handleFilter(category.name)} key={category.id}>
          {category.name}
        </button>
      ))}
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

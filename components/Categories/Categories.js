import styled from "styled-components";
import { categories } from "../../categories";
import useSWR from "swr";
import { Post } from "../Post/Post";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Categories(filterposts) {
  const { data, error } = useSWR("/api/feed", fetcher);

  function handleFilter(category) {
    //console.log(data);

    const filterposts = data.filter((post) => post.category === category);
    console.log(filterposts);
    // data.filter((data.category) => data.category === "Bücher" ).map()
  }

  return (
    <>
      {categories.map((category) => (
        <button onClick={() => handleFilter(category.name)} key={category.id}>
          {category.name}
        </button>
      ))}
    </>
  );
}

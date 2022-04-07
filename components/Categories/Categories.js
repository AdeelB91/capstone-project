import styled from "styled-components";
import { categories } from "../../categories";

export default function Categories({ posts }) {
  function handleFilter() {
    console.log(posts);
    posts.filter((post) => post.category === "Bücher");
  }

  return (
    <>
      {categories.map((category) => (
        <button onClick={handleFilter} key={category.id}>
          {category.name}
        </button>
      ))}
    </>
  );
}

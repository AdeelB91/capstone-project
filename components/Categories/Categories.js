import useSWR from "swr";
import styled from "styled-components";

export default function Categories() {
  const categories = useSWR("/api/categories");

  return (
    <>
      {categories.data && Array.isArray(categories.data) ? (
        categories.data.length > 0 ? (
          <Ul>
            {categories.data.map((category, index) => (
              <li key={category}>
                <div index={index} />
              </li>
            ))}
          </Ul>
        ) : (
          <div>No categories yet 🤷‍♂️</div>
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

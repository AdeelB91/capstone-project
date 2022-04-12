import { useState } from "react";
import styled from "styled-components";
import { categories } from "../../categories";

export function PostForm({
  onSubmitPost,
  disabled,
  submitText,
  error,
  defaultValue,
  defaultcategory,
  id,
}) {
  function handleChange(event) {
    defaultcategory = event.target.value;
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitPost(
      defaultcategory,
      event.target.elements.text.value,
      event.target
    );
    console.log(defaultcategory);
  }

  return (
    <>
      <Post autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`category-${id}`}>Kategorie:</label>
          <select
            onChange={handleChange}
            id={`category-${id}`}
            name="category"
            type="text"
            form="true"
            defaultcategory={defaultcategory}
          >
            <option value="">Kategorie auswählen</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <label htmlFor={`text-${id}`}>Beitrag</label>
          <input
            type="text"
            id={`text-${id}`}
            required
            name="text"
            defaultValue={defaultValue}
          />
          {error ? (
            <p>
              <strong>Error:</strong> {error}
            </p>
          ) : null}{" "}
          <CreateButton>
            <input type="submit" value={submitText} disabled={disabled} />
          </CreateButton>
        </div>
      </Post>
    </>
  );
}

const Post = styled.form`
  background-color: white;
  margin-bottom: 0;
  > div {
    gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    padding: 20px;
    margin-bottom: 50px;
  }
  label {
    font-size: medium;
  }
  input[type="text"] {
    appearance: none;
    padding: 1rem;
    width: auto;
    border: 1px solid rgb(190 190 190);
    border-radius: 3px;
  }
  input[type="submit"] {
    background-color: white;
    width: fit-content;
    padding: 0.2rem;
    font-weight: bold;
  }
`;

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
`;

// const PostText = styled.span`
//   display: flex;
//   box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
//     rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
//   padding: 20px;
//   margin: 50px;
// `;

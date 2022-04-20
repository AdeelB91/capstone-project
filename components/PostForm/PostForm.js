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
          <InputContainer>
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
          </InputContainer>
          <InputContainer>
            <label htmlFor={`text-${id}`}>Beitrag:</label>
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
          </InputContainer>
        </div>
      </Post>
    </>
  );
}

const Post = styled.form`
  background-color: white;

  > div {
    display: flex;
    gap: 5vh;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    padding: 3vh;
    margin: 0 0 20vh;
  }
  label {
    font-size: 1.2rem;
  }
  input[type="text"] {
    appearance: none;
    padding: 0.5rem;
    width: auto;
    height: 15vh;
    border: 1px solid rgb(190 190 190);
    border-radius: 3px;
    font-size: 1rem;
  }
  input[type="submit"] {
    background-color: #07549b;
    width: fit-content;
    padding: 0.5vh 1vh;
    color: white;
    border-radius: 5px;
    border: solid 1px black;
    font-size: 16px;
    cursor: pointer;
    margin: 5vh 0 1vh;

    :hover {
      background: #06b9e0;
      text-decoration: none;
    }
  }
  select {
    font-size: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  margin: 1vh 0 0;
`;
const CreateButton = styled.div`
  display: flex;
  justify-content: center;
`;

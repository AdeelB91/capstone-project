import { useState } from "react";
import styled from "styled-components";

export function Postform() {
  const [postText, setPostText] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setPostText(event.target.elements.text.value);
    event.target.elements.text.value = "";
    //setValue("");

    // if (!postText) return alert("Please type in your Post.");
  }

  return (
    <>
      <PageTitle>Beitrag erstellen</PageTitle>
      <Post autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputText">Beitrag</label>
          <input type="text" id="inputText" required name="text" />
          <button type="submit">Beitrag erstellen</button>
        </div>
      </Post>
      <PostText id="display">{postText}</PostText>
    </>
  );
}

const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Post = styled.form`
  display: flex;
  justify-content: center;
  > div {
    gap: 15px;
    display: flex;
    flex-direction: column;
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
    width: 300px;
    border: 1px solid rgb(190 190 190);
    border-radius: 3px;
  }
  button[type="submit"] {
    margin: 30px;
  }
`;

const PostText = styled.span`
  display: flex;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 20px;
  margin: 50px;
`;

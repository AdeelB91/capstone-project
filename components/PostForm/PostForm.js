import { useState } from "react";
import styled from "styled-components";

export function Postform() {
  const [postText, setPostText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setPostText(event.target.elements.text.value);

    // if (!postText) return alert("Please type in your Post.");
  }

  return (
    <Post onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputText">Post</label>
        <input type="text" id="inputText" required name="text" />
        <button type="submit">Create Post</button>
        <span id="display">{postText}</span>
      </div>
    </Post>
  );
}

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
    margin-top: auto;
  }
  span {
    border: 1px solid rgb(190 190 190);
  }
`;

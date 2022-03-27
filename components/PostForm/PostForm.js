import styled from "styled-components";

export function Postform() {
  function handleClick(event) {
    event.preventDefault();
    document.getElementById("display").innerHTML =
      document.getElementById("inputText").value;
  }

  return (
    <Post>
      <div>
        <label>Post</label>
        <input type="text" id="inputText" required name="text" />
        <button type="submit" onClick={handleClick}>
          Create Post
        </button>
        <span id="display"></span>
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

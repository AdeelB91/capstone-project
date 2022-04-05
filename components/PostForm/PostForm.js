import styled from "styled-components";

export function PostForm({
  onSubmitPost,
  disabled,
  submitText,
  error,
  defaultValue,
  defaultcategory,
  id,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitPost(
      event.target[select.selectedIndex].id,
      event.target.elements.text.value,
      event.target
    );
  }

  return (
    <>
      <PageTitle>Beitrag erstellen</PageTitle>
      <Post autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`category-${id}`}>Choose a Category:</label>
          <select
            id={`category-${id}`}
            name="category"
            type="text"
            form="true"
            defaultcategory={defaultcategory}
          >
            <option value="Filme">Filme</option>
            <option value="Serien">Serien</option>
            <option value="Bücher">Bücher</option>
            <option value="Podcasts">Podcasts</option>
            <option value="Essen">Essen</option>
            <option value="Trinken">Trinken</option>
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
          <input type="submit" value={submitText} disabled={disabled} />
        </div>
      </Post>
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
    margin: 15px 40px;
    background-color: #0b2b40;
    color: white;
  }
`;

// const PostText = styled.span`
//   display: flex;
//   box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
//     rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
//   padding: 20px;
//   margin: 50px;
// `;

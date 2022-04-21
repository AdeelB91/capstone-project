import { BsBookmarkHeart, BsBookmarkDash } from "react-icons/bs";
import styled from "styled-components";

export default function BookmarkIcon({ active, handleClick }) {
  return (
    <>
      {active ? (
        <BookmarkIcons onClick={() => handleClick()} />
      ) : (
        <BookmarkIcons onClick={() => handleClick()} />
      )}
    </>
  );
}

const BookmarkIcons = styled(BsBookmarkDash, BsBookmarkHeart)`
  cursor: pointer;
  font-size: 25px;
  @media screen and (min-width: 700px) {
    font-size: 33px;
  }
`;

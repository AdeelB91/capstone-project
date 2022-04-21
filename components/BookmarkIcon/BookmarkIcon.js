import { BsBookmarkHeart, BsBookmarkDash } from "react-icons/bs";
import styled from "styled-components";

export default function BookmarkIcon({ active, handleClick }) {
  return (
    <>
      {active ? (
        <BookmarkDash onClick={() => handleClick()} />
      ) : (
        <BookmarkHeart onClick={() => handleClick()} />
      )}
    </>
  );
}

const BookmarkDash = styled(BsBookmarkDash)`
  cursor: pointer;
  font-size: 25px;
  @media screen and (min-width: 700px) {
    font-size: 33px;
  }
`;
const BookmarkHeart = styled(BsBookmarkHeart)`
  cursor: pointer;
  font-size: 25px;
  @media screen and (min-width: 700px) {
    font-size: 33px;
  }
`;

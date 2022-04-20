import { BsBookmarkHeart, BsBookmarkDash } from "react-icons/bs";
import styled from "styled-components";

export default function BookmarkIcon({ active, handleClick }) {
  return (
    <>
      {active ? (
        <BookmarkDash size={25} onClick={() => handleClick()} />
      ) : (
        <BookmarkHeart size={25} onClick={() => handleClick()} />
      )}
    </>
  );
}

const BookmarkDash = styled(BsBookmarkDash)`
  cursor: pointer;
`;
const BookmarkHeart = styled(BsBookmarkHeart)`
  cursor: pointer;
`;
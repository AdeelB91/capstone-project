import { BsBookmarkHeart, BsBookmarkDash } from "react-icons/bs";
import styled from "styled-components";

export default function BookmarkIcon({ active = false }) {
  return (
    <>{active ? <BookmarkDash size={22} /> : <BookmarkHeart size={22} />}</>
  );
}

const BookmarkDash = styled(BsBookmarkDash)`
  cursor: pointer;
`;
const BookmarkHeart = styled(BsBookmarkHeart)`
  cursor: pointer;
`;

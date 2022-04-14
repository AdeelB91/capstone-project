import { BsBookmarkHeart, BsBookmarkDash } from "react-icons/bs";

export default function BookmarkIcon({ active, handleClick }) {
  return (
    <>
      {active ? (
        <BsBookmarkDash size={22} onClick={() => handleClick()} />
      ) : (
        <BsBookmarkHeart size={22} onClick={() => handleClick()} />
      )}
    </>
  );
}

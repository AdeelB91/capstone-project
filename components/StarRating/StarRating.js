import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function StarRating({ active, handleChangeActive }) {
  return (
    <>
      {active ? (
        <AiFillStar
          className="active"
          size={22}
          onClick={() => handleChangeActive()}
        />
      ) : (
        <AiOutlineStar
          className="inactive"
          size={22}
          onClick={() => handleChangeActive()}
        />
      )}
    </>
  );
}

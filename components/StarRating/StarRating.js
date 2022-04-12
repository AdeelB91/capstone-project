import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function StarRating({ active, handleChangeActive }) {
  return (
    <>
      {active ? (
        <AiFillStar
          fill={"#F2BE22"}
          size={22}
          onClick={() => handleChangeActive()}
        />
      ) : (
        <AiOutlineStar size={22} onClick={() => handleChangeActive()} />
      )}
    </>
  );
}

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import styled from "styled-components";

export default function StarRating({ active, handleChangeActive }) {
  return (
    <>
      {active ? (
        <FillStar fill={"#F2BE22"} onClick={() => handleChangeActive()} />
      ) : (
        <OutlineStar onClick={() => handleChangeActive()} />
      )}
    </>
  );
}

const FillStar = styled(AiFillStar)`
  font-size: 22px;
  @media screen and (min-width: 700px) {
    font-size: 35px;
  }
`;

const OutlineStar = styled(AiOutlineStar)``;

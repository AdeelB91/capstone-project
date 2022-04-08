import { useState } from "react";
import Star from "../Star/Star";

function StarRating({ onChange }) {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
  };
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </span>
  );
}
export default StarRating;

// import React, { useState } from "react";
// import Rating from "react-simple-star-rating";

// export default function StarRating() {
//   const [rating, setRating] = useState(0); // initial rating value

//   // Catch Rating value
//   const handleRating = (rate) => {
//     setRating(rate);
//     // Some logic
//   };

//   return (
//     <div className="App">
//       <Rating
//         onClick={handleRating}
//         ratingValue={rating}
//         size={20}
//         label
//         transition
//         fillColor="orange"
//         emptyColor="gray"
//         className="foo" // Will remove the inline style if applied
//       />
//       {/* Use rating value */}
//       {rating}
//     </div>
//   );
// }

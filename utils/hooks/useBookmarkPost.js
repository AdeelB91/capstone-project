// import { useState } from "react";
// import useSWR from "swr";

// export function useBookmarkPost(postId) {
//   const posts = useSWR("/api/posts");

//   const [isLiking, setIsLiking] = useState(false);
//   const [error, setError] = useState();

//   async function handleLike() {
//     setIsLiking(true);
//     const response = await fetch(`/api/posts/${postId}/like`, {
//       method: "PATCH",
//     });
//     const likedPost = await response.json();
//     if (response.ok) {
//       posts.mutate();
//       setError();
//     } else {
//       setError(likedPost.error ?? "Something went wrong");
//     }
//     setIsLiking(false);
//   }

//   return {
//     isLiking: isLiking,
//     error,
//     handleLike,
//   };
// }

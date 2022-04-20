// import { useState } from "react";
// import useSWR from "swr";

// export function useDeleteBookmark(post) {
//   const posts = useSWR("/api/posts");

//   const [isDeletingBookmark, setIsDeletingBookmark] = useState(false);

//   async function handleDeleteBookmark() {
//     setIsDeletingBookmark(true);
//     const response = await fetch(`/api/users/${post._id}/bookmark`, {
//       method: "DELETE",
//     });
//     if (response.ok) {
//       posts.mutate();
//     }
//     setIsDeletingBookmark(false);
//   }

//   return {
//     isDeletingBookmark,
//     handleDeleteBookmark,
//   };
// }

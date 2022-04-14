import { useState } from "react";
import useSWR from "swr";

export function useBookmarkPost(post) {
  const posts = useSWR("/api/posts");

  const [isBookmarking, setIsBookmarking] = useState(false);
  const [error, setError] = useState();

  async function handleBookmark() {
    setIsBookmarking(true);
    const response = await fetch(`/api/users/${post._id}/bookmark`, {
      method: "PATCH",
    });
    const bookmarkedPost = await response.json();
    if (response.ok) {
      posts.mutate();
      setError();
    } else {
      setError(bookmarkedPost.error ?? "Something went wrong");
    }
    setIsBookmarking(false);
  }

  return {
    isBookmarking: isBookmarking,
    error,
    handleBookmark,
  };
}

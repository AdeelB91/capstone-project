import { useState } from "react";
import useSWR from "swr";

export function useDeletePost(post) {
  const posts = useSWR("/api/posts");

  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    const response = await fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      posts.mutate();
    }
    setIsDeleting(false);
  }

  return {
    isDeleting,
    handleDelete,
  };
}

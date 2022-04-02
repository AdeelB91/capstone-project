import { useState } from "react";
import useSWR from "swr";

export function useEditPost(post) {
  const posts = useSWR("/api/posts");

  const [isEditMode, setIsEditMode] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState();

  async function handleEdit(newText) {
    setIsUpdating(true);
    const response = await fetch(`/api/posts/${post._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: newText }),
    });
    const updatedPost = await response.json();
    if (response.ok) {
      posts.mutate();
      setError();
      setIsEditMode(false);
    } else {
      setError(updatedPost.error ?? "Something went wrong");
    }
    setIsUpdating(false);
  }

  function activateEditMode() {
    setIsEditMode(true);
  }

  return {
    isEditMode,
    isUpdating,
    error,
    activateEditMode,
    handleEdit,
  };
}

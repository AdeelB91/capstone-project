import { useState } from "react";
import useSWR from "swr";

export function useCreatePost() {
  const posts = useSWR("/api/posts");

  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState();

  async function handleCreate(newCategory, newText, form) {
    setIsCreating(true);
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ category: newCategory, text: newText }),
    });
    const createdPost = await response.json();
    if (response.ok) {
      posts.mutate();
      form.reset();
      setError();
    } else {
      setError(createdPost.error ?? "Something went wrong");
    }
    setIsCreating(false);
  }

  return {
    isCreating,
    error,
    handleCreate,
  };
}

import { useState, useEffect } from "react";
import useSWR from "swr";

export function useCreatePost() {
  const posts = useSWR("/api/posts");

  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState();

  async function handleCreate(category, newText, form) {
    setIsCreating(true);
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: newText, category: category }),
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

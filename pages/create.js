import { getSession } from "next-auth/react";
import { PostForm } from "../components/Postform/Postform";
import Navigation from "../components/Navigation/Navigation";
import { useCreatePost } from "../utils/hooks/useCreatedPost";
import Header from "../components/Header/Header";

export default function CreatePage() {
  const { handleCreate, isCreating, error } = useCreatePost();
  return (
    <>
      <Header />
      <main>
        <PostForm
          onSubmitPost={handleCreate}
          disabled={isCreating}
          submitText={isCreating ? "Creating post…" : "Create post"}
          error={error}
          id="create"
        />
      </main>
      <Navigation />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

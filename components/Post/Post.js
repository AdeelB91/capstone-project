import { PostForm } from "../Postform/Postform";
import styled from "styled-components";
import { useEditPost } from "../../utils/hooks/useEditPost";
import { useDeletePost } from "../../utils/hooks/useDeletePost";
import { useSession } from "next-auth/react";

const dateFormatter = Intl.DateTimeFormat("en", { dateStyle: "short" });

export function Post({ post }) {
  const { activateEditMode, error, handleEdit, isEditMode, isUpdating } =
    useEditPost(post);

  const { handleDelete, isDeleting } = useDeletePost(post);

  // we can only edit or delete our own jokes…
  const { data: session } = useSession();
  const isOwnPost = post.userId && session?.user?.id === post.userId?._id;

  if (isEditMode) {
    return (
      <Container>
        <PostForm
          defaultValue={post.text}
          onSubmitPost={handleEdit}
          disabled={isUpdating}
          submitText={isUpdating ? "Updating post…" : "Update post"}
          error={error}
          id={post._id}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <Info>
          {post.userId?.name ? <div> {post.userId.name}</div> : null}
          {post.createdAt ? (
            <div>{dateFormatter.format(new Date(post.createdAt))}</div>
          ) : null}
          {isOwnPost ? (
            <Buttons>
              <button onClick={activateEditMode}>Edit</button>
              <button
                onClick={() => {
                  if (
                    confirm(
                      `Please confirm to delete this post:\n\n"${post.text}"`
                    )
                  ) {
                    handleDelete();
                  }
                }}
                disabled={isDeleting}
              >
                Delete
              </button>
            </Buttons>
          ) : null}
        </Info>
        <q>{post.text}</q>
      </Container>
    );
  }
}

export const Container = styled.article`
  padding: 1rem 1rem 0.75rem 1rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  margin-top: 1vh;
  > form {
    height: 100%;
  }
  q {
    margin-bottom: 1vh;
  }
`;

const Info = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  font-size: small;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  > button {
    flex: 1 0 auto;
  }
`;

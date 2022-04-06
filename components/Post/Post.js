import { PostForm } from "../PostForm/PostForm";
import styled from "styled-components";
import { useEditPost } from "../../utils/hooks/useEditPost";
import { useDeletePost } from "../../utils/hooks/useDeletePost";
import { useSession } from "next-auth/react";
import Image from "next/image";

const dateFormatter = Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeStyle: "short",
});

export function Post({ post }) {
  const { activateEditMode, error, handleEdit, isEditMode, isUpdating } =
    useEditPost(post);

  const { handleDelete, isDeleting } = useDeletePost(post);

  const { data: session } = useSession();
  const isOwnPost = post.userId && session?.user?.id === post.userId?._id;

  if (isEditMode) {
    return (
      <Container>
        <PostForm
          defaultcategory={post.category}
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
          <ProfilePart>
            {post.userId?.image ? (
              <img alt="profilepic" src={post.userId.image} />
            ) : null}
            {post.userId?.name ? <div> {post.userId.name}</div> : null}
          </ProfilePart>
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
        <p>{post.category}</p>
        <q>{post.text}</q>
        {post.createdAt ? (
          <TimeStamp>
            {dateFormatter.format(new Date(post.createdAt))}
          </TimeStamp>
        ) : null}
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
    margin: 2vh;
  }
  img {
    width: 30px;
    border-radius: 15px;
  }
`;
const TimeStamp = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-size: 1.3vh;
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
    font-size: 10px;
    background-color: #0b2b40;
    color: white;
    padding: 2px;
  }
`;

const ProfilePart = styled.div`
  top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

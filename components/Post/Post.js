import { PostForm } from "../PostForm/PostForm";
import styled from "styled-components";
import { useEditPost } from "../../utils/hooks/useEditPost";
import { useDeletePost } from "../../utils/hooks/useDeletePost";
import { useSession } from "next-auth/react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import StarRating from "../StarRating/StarRating";
import { useState } from "react";
import useSWR from "swr";
import { useLikePost } from "../../utils/hooks/useLikePost";
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon";
import { useBookmarkPost } from "../../utils/hooks/useBookmarkPost";

const dateFormatter = Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeStyle: "short",
});

export function Post({ post }) {
  const { activateEditMode, error, handleEdit, isEditMode, isUpdating } =
    useEditPost(post);

  const { handleLike } = useLikePost(post._id);

  const posts = useSWR("/api/posts");
  const users = useSWR("/api/users");

  const { handleBookmark, isBookmarking } = useBookmarkPost(post);

  const { handleDelete, isDeleting } = useDeletePost(post);

  function handleClick() {
    console.log(post);
    handleBookmark(post);
  }

  const { data: session } = useSession();
  const isOwnPost = post.userId && session?.user?.id === post.userId?._id;
  const isLiked = post.likes.includes(session?.user?.id);

  if (users.data) {
    const isBookmarked = users.data.find((user) =>
      user.bookmarkedPosts.includes(post._id)
    );
    console.log(isBookmarked);
  }

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
        <PostHead>
          <ProfilePart>
            {post.userId?.image ? (
              <img alt="profilepic" src={post.userId.image} />
            ) : null}
            {post.userId?.name ? <p> {post.userId.name}</p> : null}
          </ProfilePart>
          {isOwnPost ? (
            <Buttons>
              <AiOutlineEdit size={21} onClick={activateEditMode} />
              <RiDeleteBin2Line
                size={20}
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
              />
            </Buttons>
          ) : null}
          {isOwnPost ? null : (
            <BookmarkIcon
              id={post._id}
              active={isBookmarking}
              handleClick={handleClick}
            />
          )}
        </PostHead>
        <PostMain>
          <h4>{post.category}</h4>
          <p>{post.text}</p>
        </PostMain>
        <PostFoot>
          <LikeContainer>
            <StarRating
              id={post.id}
              active={isLiked}
              handleChangeActive={handleLike}
            />
            <p>
              {post.likes.length} {post.likes.length === 1 ? "Star" : "Stars"}
            </p>
          </LikeContainer>
          {post.createdAt ? (
            <p>{dateFormatter.format(new Date(post.createdAt))}</p>
          ) : null}
        </PostFoot>
      </Container>
    );
  }
}

export const Container = styled.article`
  background-color: white;
  padding: 1rem 1rem 0.7rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
  margin-top: 1vh;
  > form {
    height: 100%;
  }
  img {
    width: 33px;
    border-radius: 20px;
  }
`;

const PostHead = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  font-size: small;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PostFoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1vh;

  > p {
    font-size: 0.7rem;
  }
`;

const PostMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  margin: 0.5vh 1.3vh;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.1rem;
  margin-bottom: 0.5vh;

  > p {
    font-size: 11px;
    color: grey;
    padding-bottom: 0.1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  > button {
    flex: 1 0 auto;
    font-size: 10px;
    background-color: white;
    padding: 2px;
    border: solid #0b2b40 1px;
  }
`;

const ProfilePart = styled.div`
  top: 5px;
  display: flex;
  align-items: flex-end;
  gap: 5px;

  > p {
    font-size: small;
  }
`;

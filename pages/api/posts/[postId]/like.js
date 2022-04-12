import { getSession } from "next-auth/react";
import Post from "../../../../schema/Post";
import { connectDb } from "../../../../utils/db";

export default async function handler(request, response) {
  const { postId } = request.query;

  try {
    connectDb();

    const session = await getSession({ req: request });
    if (!session) {
      response.status(401).json({ error: "not authenticated" });
      return;
    }
    switch (request.method) {
      case "PATCH":
        const post = await Post.findById(postId, {
          likes: {
            $elemMatch: { $eq: session.user.id },
          },
        });
        if (!post) {
          response.status(404).json({ error: "Not found" });
          return;
        }

        const isLiked = post.likes.length > 0;
        const updateOperation = isLiked ? "$pull" : "$push";

        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          {
            [updateOperation]: { likes: session.user.id },
          },
          { returnDocument: "after", runValidators: true }
        );

        if (updatedPost) {
          response.status(200).json({
            success: true,
            data: updatedPost,
          });
        } else {
          response.status(404).json({ error: "Not found" });
        }

        break;

      default:
        console.log("request method was neither PATCH or DELETE");
        response.status(405).json({ error: "Method not allowed" });
        break;
    }
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
}

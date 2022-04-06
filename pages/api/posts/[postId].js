import { getSession } from "next-auth/react";
import Post from "../../../schema/Post";
import { connectDb } from "../../../utils/db";

export default async function handler(request, response) {
  const { postId } = request.query;

  try {
    connectDb();

    const session = await getSession({ req: request });

    switch (request.method) {
      case "PATCH":
        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          {
            $set: request.body,
          },
          { returnDocument: "after", runValidators: true }
        ).where({ userId: session.user.id });

        if (updatedPost) {
          response.status(200).json({
            success: true,
            data: updatedPost,
          });
        } else {
          response.status(404).json({ error: "Not found" });
        }

        break;

      case "DELETE":
        const deletedPost = await Post.findByIdAndDelete(postId).where({
          userId: session.user.id,
        });

        if (deletedPost) {
          response.status(200).json({
            success: true,
            data: deletedPost,
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

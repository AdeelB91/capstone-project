import { getSession } from "next-auth/react";
import User from "../../../../schema/User";
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
        const user = await User.findById(session.user.id);

        await User.updateOne(
          { _id: session.user.id },
          { $addToSet: { bookmarkedPosts: [postId] } }
        );

      // const isBookmarked = user.bookmarkedPosts.id === session.user.id;
      // const updateOperation = isBookmarked ? "$pull" : "$push";

      // const updatedPost = await Post.findByIdAndUpdate(
      //   postId,
      //   {
      //     [updateOperation]: { bookmarkedPosts: [postId] },
      //   },
      //   { returnDocument: "after", runValidators: true }
      // );

      // if (updatedPost) {
      //   response.status(200).json({
      //     success: true,
      //     data: updatedPost,
      //   });
      // } else {
      //   response.status(404).json({ error: "Not found" });
      // }

      // break;

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

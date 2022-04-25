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

        const isBookmarked = user.bookmarkedPosts.includes(postId);
        const updateOperation = isBookmarked ? "$pull" : "$push";

        const updatedUser = await User.findByIdAndUpdate(
          session.user.id,
          {
            [updateOperation]: { bookmarkedPosts: postId },
          },
          { returnDocument: "after", runValidators: true }
        );

        if (updatedUser) {
          response.status(200).json({
            success: true,
            data: updatedUser,
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

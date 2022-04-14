import { getSession } from "next-auth/react";
import Post from "../../schema/Post";
import User from "../../schema/User";
import { connectDb } from "../../utils/db";

export default async function handler(request, response) {
  try {
    connectDb();
    const session = await getSession({ req: request });

    switch (request.method) {
      case "GET":
        const user = await User.findById(session.user.id);

        const posts = await Post.find()
          .where("_id")
          .in(user.bookmarkedPosts)
          .sort({ createdAt: -1 })
          .limit(100)

          // we only populate name, image and _id to not leak any mails
          .populate("userId", ["name", "image", "_id"]);
        response.status(200).json(posts);
        break;

      default:
        console.log("request method was neither GET");
        response.status(405).json({ error: "Method not allowed" });
        break;
    }
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
}

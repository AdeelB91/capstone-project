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
        await User.updateOne(
          { _id: session.user.id },
          { $addToSet: { bookmarkedPosts: [postId] } }
        );
      // if (!user) {
      //   response.status(404).json({ error: "Not found" });
      //   return;
      // }

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

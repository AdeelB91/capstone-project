import { getSession } from "next-auth/react";
import { connectDb } from "../../../utils/db";
import User from "../../../schema/User";

export default async function handler(request, response) {
  try {
    connectDb();

    const session = await getSession({ req: request });

    switch (request.method) {
      case "GET":
        if (session) {
          const users = await User.find();
          response.status(200).json(users);
        } else {
          response.status(401).json({ error: "Not authenticated" });
        }
        break;
    }
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
}

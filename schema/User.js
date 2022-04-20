import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    email: { type: String },
    friendIds: [{ type: Schema.Types.ObjectId, ref: "User" }],
    bookmarkedPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

export default model("User", userSchema, "users", { overwriteModels: true });

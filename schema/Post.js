import { Schema, model } from "mongoose";
import "./User";

const postSchema = new Schema(
  {
    category: { type: String, required: true },
    text: { type: String, required: true, minlength: 5 },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default model("Post", postSchema, "posts", { overwriteModels: true });

import { Schema, model } from "mongoose";
import "./User";

const postSchema = new Schema(
  {
    category: { type: String, required: true },
    text: { type: String, required: true, minlength: 5 },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model("Post", postSchema, "posts", { overwriteModels: true });

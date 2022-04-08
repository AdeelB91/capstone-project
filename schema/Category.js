import { Schema, model } from "mongoose";
import "./Post";
import "./User";

const categorySchema = new Schema(
  {
    category: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default model("Category", categorySchema, "categories", {
  overwriteModels: true,
});

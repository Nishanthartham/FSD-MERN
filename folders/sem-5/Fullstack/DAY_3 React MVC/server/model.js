import mongoose from "mongoose";
//model can be a database or business logic
const bookSchema = new mongoose.Schema(
  {
    bname: { type: String },
    cost: { type: Number, default: 100 },
    author: { type: String },
  },
  { Collection: "MVC" }
);

export const books = mongoose.model("MVC", bookSchema); // MVC mentioned in model becomes collection

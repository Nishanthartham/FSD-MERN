import mongoose from "mongoose";
//model can be a database or business logic
const cricSchema = new mongoose.Schema({
  name: { type: String },
  roll: { type: Number, default: 100 },
  jno: { type: String },
});

export const cric = mongoose.model("MVC", cricSchema); // MVC mentioned in model becomes collection

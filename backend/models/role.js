import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: String,
  precio: Number,
  description: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});


const role = mongoose.model("role", roleSchema);

export default role
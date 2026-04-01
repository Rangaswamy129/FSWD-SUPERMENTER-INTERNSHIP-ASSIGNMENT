const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  category: { type: String, default: "General" },
  priority: { type: String, default: "low" }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// CREATE TASK
router.post("/", async (req, res) => {
  try {
    console.log("BODY:", req.body); // debug

    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = new Task({
      title,
      description
    });

    const saved = await task.save();

    res.status(201).json(saved);

  } catch (err) {
    console.error("POST ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});
// GET ALL TASKS
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// GET SINGLE TASK
router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// UPDATE TASK
router.put("/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE TASK
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
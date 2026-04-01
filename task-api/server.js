const express = require("express");
const app = express();
const PORT = 5000;
const taskRoutes = require("./routes/TaskRoutes");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
const path = require("path");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/taskdb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/tasks", taskRoutes);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
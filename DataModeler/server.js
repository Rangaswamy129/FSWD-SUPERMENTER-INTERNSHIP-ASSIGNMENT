const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Models
const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* ================= USERS ================= */

// Create User
app.post("/users", async (req, res) => {
  try {
    console.log("USER BODY:", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    const user = await User.create({ name, email, password });
    res.json(user);

  } catch (err) {
    console.error("USER ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get Users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

/* ================= POSTS ================= */

// Create Post
app.post("/posts", async (req, res) => {
  try {
    console.log("POST BODY:", req.body);

    const { title, content, author } = req.body;

    // Validation
    if (!title || !content || !author) {
      return res.status(400).json({ error: "All fields required" });
    }

    if (!mongoose.Types.ObjectId.isValid(author)) {
      return res.status(400).json({ error: "Invalid Author ID (select user properly)" });
    }

    // Check if user exists
    const userExists = await User.findById(author);
    if (!userExists) {
      return res.status(400).json({ error: "User not found" });
    }

    const post = await Post.create({
      title,
      content,
      author
    });

    res.json(post);

  } catch (err) {
    console.error("POST ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get Posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email");

    res.json(posts);

  } catch (err) {
    console.error("GET POSTS ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

/* ================= COMMENTS ================= */

// Add Comment
app.post("/comments", async (req, res) => {
  try {
    console.log("COMMENT BODY:", req.body);

    const { text, post, user } = req.body;

    // Validation
    if (!text || !post || !user) {
      return res.status(400).json({ error: "All fields required" });
    }

    if (!mongoose.Types.ObjectId.isValid(post)) {
      return res.status(400).json({ error: "Invalid Post ID (select post properly)" });
    }

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ error: "Invalid User ID (select user properly)" });
    }

    // Check existence
    const postExists = await Post.findById(post);
    const userExists = await User.findById(user);

    if (!postExists) {
      return res.status(400).json({ error: "Post not found" });
    }

    if (!userExists) {
      return res.status(400).json({ error: "User not found" });
    }

    const comment = await Comment.create({
      text,
      post,
      user
    });

    res.json(comment);

  } catch (err) {
    console.error("COMMENT ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get Comments
app.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("user", "name")
      .populate("post", "title");

    res.json(comments);

  } catch (err) {
    console.error("GET COMMENT ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
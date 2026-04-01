const express = require("express");
const router = express.Router();
const { authors } = require("../data/data");

// GET all authors
router.get("/", (req, res) => {
  res.json(authors);
});

// GET author by ID
router.get("/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).json({ message: "Author not found" });
  res.json(author);
});

// POST new author
router.post("/", (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name
  };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// PUT update author
router.put("/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).json({ message: "Author not found" });

  author.name = req.body.name || author.name;
  res.json(author);
});

// DELETE author
router.delete("/:id", (req, res) => {
  const index = authors.findIndex(a => a.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Author not found" });

  authors.splice(index, 1);
  res.json({ message: "Author deleted" });
});

module.exports = router;
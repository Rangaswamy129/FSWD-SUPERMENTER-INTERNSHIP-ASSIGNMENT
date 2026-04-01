const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const PORT=3000;
app.use(cors());

app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static("public"));

// Routes
const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

// Home route (optional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
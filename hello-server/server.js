const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = "";

  // Routing
  if (req.url === "/") {
    filePath = "./pages/index.html";
  } else if (req.url === "/about") {
    filePath = "./pages/about.html";
  } else if (req.url === "/contact") {
    filePath = "./pages/contact.html";
  } else if (req.url === "/services") {
    filePath = "./pages/services.html";
  } else {
    filePath = "./pages/404.html";
    res.writeHead(404, { "Content-Type": "text/html" });
  }

  // Read and serve file
  fs.readFile(path.join(__dirname, filePath), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
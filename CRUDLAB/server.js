const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
app.use(express.json());

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/crudlab")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));


// ================== ROUTES START HERE ==================

//  POST (CREATE)
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  const savedUser = await user.save();
  res.json(savedUser);
});


//  GET (READ)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// PUT (UPDATE)
app.put("/users/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
});


//  DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});


// ================== SERVER ==================
const port=5000;
app.listen(port, () => {
  console.log(`server run at http://localhost:${port}`);

});
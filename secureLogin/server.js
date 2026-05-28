const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send("Server is running 🚀");
});

// connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log("DB Error:", err));

//  routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`server run at http://localhost:${port}`);
});
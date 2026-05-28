import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js'; //  add .js

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/connectstack')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use('/api/users', userRoutes);
app.get('/',(req,res)=>{
res.send("api running");
});

app.listen(5000, () => console.log(`Server run at http://localhost:${5000}`));
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// ✅ GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ POST add new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ✅ PUT update user
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ✅ DELETE user
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // check if id exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(id);

    res.json({ message: "User deleted successfully" });

  } catch (error) {
    console.error(error);   // 👈 IMPORTANT (see error in terminal)
    res.status(500).json({ message: error.message });
  }
});

export default router;   // ✅ VERY IMPORTANT
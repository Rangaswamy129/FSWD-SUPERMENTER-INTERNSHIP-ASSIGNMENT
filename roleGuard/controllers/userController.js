const User = require('../models/User');

// Register user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: role || 'user'
    });

    await user.save();
    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Delete user (Admin only)
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

// Normal user route
exports.userDashboard = (req, res) => {
  res.json({ message: "Welcome User Dashboard" });
};

// Admin route
exports.adminDashboard = (req, res) => {
  res.json({ message: "Welcome Admin Dashboard" });
};
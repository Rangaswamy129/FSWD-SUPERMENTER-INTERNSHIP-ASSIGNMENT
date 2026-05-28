const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const userId = req.headers.userid;

    if (!userId) {
      return res.status(401).json({ message: "No user ID provided" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = authMiddleware;
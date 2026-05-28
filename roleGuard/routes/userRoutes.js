const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleGuard = require('../middleware/roleGuard');

const {
  registerUser,
  getAllUsers,
  deleteUser,
  userDashboard,
  adminDashboard
} = require('../controllers/userController');

// Public route
router.post('/register', registerUser);

// User route (user + admin)
router.get('/user', authMiddleware, roleGuard(['user', 'admin']), userDashboard);

// Admin only routes
router.get('/admin', authMiddleware, roleGuard(['admin']), adminDashboard);
router.get('/users', authMiddleware, roleGuard(['admin']), getAllUsers);
router.delete('/users/:id', authMiddleware, roleGuard(['admin']), deleteUser);

module.exports = router;
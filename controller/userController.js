const User = require('../model/User');
require('dotenv').config();

const register = async (req, res) => {
  const { login, password } = req.body;
  try {
    await User.create({ login, password });
    res
      .status(200)
      .json({ message: 'Registered successfully', status: 'success' });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res
        .status(400)
        .json({ status: 'error', message: 'Login is already in use' });
    }
  }
};

const login = async (req, res) => {
  const { login, password } = req.body;
  const user = await User.login(login, password);
  if (user) {
    res.status(200).json({
      userId: user._id,
      login: user.login,
      isAdmin: user.isAdmin,
      message: 'Logged in successfully',
      status: 'success',
    });
  } else {
    res.status(404).json({ message: 'User does not exist', status: 'error' });
  }
};

module.exports = {
  login,
  register,
};

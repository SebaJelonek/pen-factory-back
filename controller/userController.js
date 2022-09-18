const User = require('../model/User');
require('dotenv').config();

const register = async (req, res) => {
  const { login, password } = req.body;

  const user = await User.create({ login, password });
  res.status(200).json({ message: 'Registered in successfully' });
};

const login = async (req, res) => {
  const { login, password } = req.body;

  const user = await User.login(login, password);

  res
    .status(200)
    .json({ isAdmin: user.isAdmin, mssage: 'Logged in successfully' });
};

module.exports = {
  login,
  register,
};

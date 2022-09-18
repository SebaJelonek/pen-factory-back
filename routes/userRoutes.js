const { Router } = require('express');

const { login, register } = require('../controller/userController');

const userRouter = Router();

userRouter.post('/api/user/login', login);
userRouter.post('/api/user/register', register);

module.exports = userRouter;

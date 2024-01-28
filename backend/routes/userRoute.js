const express = require("express");
const { handleUserLogin, handleUserSignUp } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post('/login', handleUserLogin);
userRouter.post('/signup', handleUserSignUp);

module.exports = userRouter;
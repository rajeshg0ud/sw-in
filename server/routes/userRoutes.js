import express from 'express'
import { login, signout, signup } from '../controllers/userController.js';

const userRouter= express.Router();

userRouter.post('/login', login);

userRouter.post('/signup', signup);

userRouter.post('/signout', signout);

export default userRouter
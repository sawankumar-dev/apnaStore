import express from 'express'
import { verifyJwt } from '../middlewares/auth.middleware.js';
import { addToCart } from '../controllers/cart.controller.js';

const cartRouter = express.Router();

cartRouter.post("/", verifyJwt, addToCart)

export default cartRouter
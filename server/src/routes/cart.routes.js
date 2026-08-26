import express from 'express'
import { verifyJwt } from '../middlewares/auth.middleware.js';
import { addToCart, getMyCart } from '../controllers/cart.controller.js';

const cartRouter = express.Router();

cartRouter.post("/", verifyJwt, addToCart)
cartRouter.get("/", verifyJwt, getMyCart)

export default cartRouter
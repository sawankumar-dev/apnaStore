import express from 'express'
import { verifyJwt } from '../middlewares/auth.middleware.js';
import { addToCart, getMyCart, removeFromCart } from '../controllers/cart.controller.js';

const cartRouter = express.Router();

cartRouter.post("/", verifyJwt, addToCart)
cartRouter.get("/", verifyJwt, getMyCart)
cartRouter.delete("/:productId", verifyJwt, removeFromCart)

export default cartRouter
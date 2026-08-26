import { addToCartService, getMyCartService } from "../service/cart.service.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const addToCart = asyncHandler(async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user._id;
    const cart = await addToCartService(userId, productId, quantity);
    return res.status(200).json(new ApiResponse(200, "Product added to cart successfully", cart))
})

export const getMyCart = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const cart = await getMyCartService();
    return res.status(200).json(new ApiResponse(200, "Cart fetched successfully", cart))
})
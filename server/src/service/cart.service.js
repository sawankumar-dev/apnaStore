import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js"

export const addToCartService = async (userId, productId, quantity) => {
    const product = await Product.findById(productId);
    if(!product) {
        throw new Error("Product not found")
    }
    if(product.stock < quantity) {
        throw new Error("Not enough stock!")
    }
    let cart = await Cart.findOne({ user: userId })
    // agr user ki cart nhi hai
    if(!cart) {
        cart = await Cart.create({
            user: userId,
            items: [
                {
                    product: productId,
                    quantity,
                }
            ]
        })
        return cart;
    }
    // Product already cart me hai
    const existingItem = cart.items.find((item) => item.product.toString() === productId);
    if(existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if(newQuantity > product.stock) {
            throw new Error("Not enough stock")
        }
        existingItem.quantity = newQuantity;
    } else {
        cart.items.push({
            product: productId,
            quantity
        })
    }
    await cart.save();
    return cart;
}
export const getMyCartService = async (userId) => {
    const cart = await Cart.findOne({ user: userId }).populate("items.product")
    if (!cart) {
        return {
            user: userId,
            items: []
        }
    }
    return cart;
}

export const removeFromCartService = async (userId, productId) => {
    const cart = await Cart.findOne({ user: userId });
    if(!cart) {
        throw new Error("Cart not found")
    }
    const itemsExists = cart.items.find((item) => item.product.toString() === productId)
    if(!itemsExists) {
        throw new Error("Product not found in cart")
    }
    cart.items = cart.items.filter((item) => item.product.toString() !== productId)
    await cart.save();
    return cart;
}
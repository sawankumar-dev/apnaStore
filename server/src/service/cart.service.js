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
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import User from "../models/user.model.js";

export const verifyJwt = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken;
        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request",
                token: token
            })
        }
        // token verify
        const decodedToken = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select('-password -refreshToken');
        if(!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Access Token"
            })
        }
        req.user = user;
        next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message || "Invalid access Token",
        })
    }
}
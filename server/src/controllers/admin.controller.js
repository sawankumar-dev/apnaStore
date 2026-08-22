import User from "../models/user.model.js";
import Vendor from "../models/vendor.model.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAllCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: 'customer' });
        return res.status(200).json({
            success: true,
            message: "User Fetched successfully!",
            customers
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error."
        })
    }
};

export const getAllVendors = async (req, res) => {
    try {
        const vendors = await User.find({ role: "vendor" });
        return res.status(200).json({
            success: true,
            message:"Vendors Fetched successfully.",
            vendors,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error."
        })
    }
};

export const getAdminDashboardStats = asyncHandler(async (req, res) => {
    const [totalCustomer, totalVendors, totalPendingRequests] = await Promise.all([
        User.countDocuments({ role: "customer" }),
        Vendor.countDocuments({ status: "approved" }),
        Vendor.countDocuments({status: "pending"}),
    ]);
    const stats = {
        totalCustomer,
        totalVendors,
        totalPendingRequests
    }
    return res.status(200).json(new ApiResponse(200, "Dashboard stats fetched successfully", stats))
})

export const deleteUser = asyncHandler(async (req, res) => {
    const { userId } =  req.params;
    const user = await User.findByIdAndDelete(userId);
    if(!user) {
        return res.status(404).json(new ApiResponse(404, "User not found"))
    }
    return res.status(200).json(new ApiResponse(200, "User created successfully!"))
})
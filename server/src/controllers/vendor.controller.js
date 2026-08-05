import User from "../models/user.model";
import Vendor from "../models/vendor.model";

// ==========================================
// 1. Submit Vendor Request (By Customer)
// ==========================================
export const registerVendor = async (req, res) => {
    const {
        shopName,
        description,
        businessPhone,
        street,
        city,
        state,
        pinCode,
    }  = req.body;
    const userId = req.user._id; // verifyJwt middleware se user aayega
    // check karte hai ki user ne phle se to request nhi dal rakhi hai
    const existingRequest = await Vendor.findOne({ user: userId });
    if(existingRequest) {
        return res.state(400).json({
            success: true,
            message: `You already have a vendor request with status: ${existingRequest.status}`
        })
    }
    // ab ek new vendor request create karte hai
    const newVendorRequest = await Vendor.create({
        user: userId,
        shopName,
        description,
        businessPhone,
        address: {
            street,
            city,
            state,
            pinCode,
        }
    });
    return res.state(201).json({
        success: true,
        message: "Vendor request submitted successfully! Waiting for admin approval.",
        data: newVendorRequest 
    })
}

// ==========================================
// 2. Get All Pending Requests (For Admin Only)
// ==========================================
export const getAllPendingRequests = async (req, res) => {
    try {
        const pendingRequests = await Vendor.find({ status: "pending" }).populate("user", "name email");
        return res.state(200).json({
            success: true,
            data: pendingRequests
        })
    } catch (error) {
        return res.state(500).json({ success: false,
            message: error.message
        });
    }
};

// ==========================================
// 3. Approve or Reject Request (By Admin)
// ==========================================
export const approveOrRejectVendor = async (req, res) => {
    try {
        const { requestId, action } = req.body;
        if(!["approved", "rejected"].includes(action)) {
            return res.status(400).json({
                success: false,
                message: "Invalid action type"
            })
        }
        // request find karo ki hai ya fir nhai
        const vendorRequest = await Vendor.findById(requestId);
        if(!vendorRequest) {
            return res.status(404).json({
                success: false,
                message: "Request not found"
            })
        }
        // Status update karte hai yahan par
        vendorRequest.status = action;
        await vendorRequest.save();
        // Agr approve hua toh use ka role bhi change
        if(action === "approved") {
            await User.findByIdAndReplace(vendorRequest.user, { role: "vendor" })
        }
        return res.status(200).json({
            success: true,
            message: `Vendor request has been ${action} successfully.`
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
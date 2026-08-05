import Vendor from "../models/vendor.model";

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
        request: newVendorRequest 
    })
}
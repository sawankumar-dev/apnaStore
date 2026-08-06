import { Router } from 'express';
import { isAdmin, verifyJwt } from '../middlewares/auth.middleware.js';
import { registerVendor, getAllPendingRequests,  } from "../controllers/vendor.controller.js"

const vendorRouter = Router()

// routes/vendor.routes.js mein sabse upar add karein:
vendorRouter.get("/test-vendor", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Vendor router is working perfectly!"
    });
});

vendorRouter.post("/apply-request", verifyJwt, registerVendor);

// for admin
vendorRouter.get("/admin/requests", verifyJwt, isAdmin, getAllPendingRequests);
vendorRouter.post("/admin/action", verifyJwt, isAdmin, registerVendor);

export default vendorRouter
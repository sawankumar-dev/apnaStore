import { Router } from 'express';
import { isAdmin, verifyJwt } from '../middlewares/auth.middleware.js';
import { approveOrRejectVendor, getAllPendingRequests, registerVendor } from '../controllers/vendor.controller.js';

const vendorRouter = Router()

vendorRouter.post("/apply", verifyJwt, registerVendor);

// for admin
vendorRouter.get("/admin/requests", verifyJwt, isAdmin, getAllPendingRequests);
vendorRouter.post("/admin/action", verifyJwt, isAdmin, approveOrRejectVendor);

export default vendorRouter
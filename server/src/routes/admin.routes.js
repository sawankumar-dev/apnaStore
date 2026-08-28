import { Router } from "express";
import { isAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
import { deleteUser, getAdminDashboardStats, getAllCustomers, getAllVendors, getVendorProducts } from "../controllers/admin.controller.js";
import { approveOrRejectVendor, getAllPendingRequests } from "../controllers/vendor.controller.js";

const adminRouter = Router();

adminRouter.get("/vendor-products/:vendorId", getVendorProducts)
adminRouter.use(verifyJwt);
adminRouter.use(isAdmin);

adminRouter.get("/stats", getAdminDashboardStats)
adminRouter.get("/requests/pending", getAllPendingRequests)
adminRouter.post("/requests/action", approveOrRejectVendor)
adminRouter.get('/users/customers', getAllCustomers)
adminRouter.get('/users/vendors', getAllVendors)
adminRouter.delete('/users/:userId', deleteUser)

export default adminRouter;
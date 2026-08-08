import { Router } from "express";
import { isAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
import { getAdminDashboardStats, getAllCustomers, getAllVendors } from "../controllers/admin.controller.js";
import { approveOrRejectVendor, getAllPendingRequests } from "../controllers/vendor.controller.js";

const adminRouter = Router();

adminRouter.use(verifyJwt);
adminRouter.use(isAdmin);

adminRouter.get("/stats", getAdminDashboardStats)
adminRouter.get("/requests/pending", getAllPendingRequests)
adminRouter.post("/requests/action", approveOrRejectVendor)
adminRouter.get('/users/customers', isAdmin, getAllCustomers);
adminRouter.get('/users/vendors', isAdmin, getAllVendors);

export default adminRouter;
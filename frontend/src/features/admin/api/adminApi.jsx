import { api } from "../../../config/api"

// ✅ completed
export const getAllRequest = async () => {
    try {
        const response = await api.get("/admin/requests");
        return response.data
    } catch (error) {
        console.log("All Request Error",error)
    }
}

// Get All users ✅ completed 
export const getAllCustomersApi = async () => {
    try {
        const response = await api.get("/users/customers");
        return response
    } catch (error) {
        console.log("Error in Fetching users.", error)
    }
}

//Take action on vendor's request
// Get All 
export const approveOrRejectVendorApi = async(data)=>{
    try{
        console.log("data from AdminApi.jsx", data)
        const response = await api.post("/requests/action", data)
        return response;
    }   
    catch(error){
        console.log("All Request Error",error);
    }
}

//Get dashboard stats
export const dashboardStats = async () => {
    try {
        const response = await api.get("/stats");
        return response
    } catch (error) {
        console.log("All Request Error",error)
    }
}
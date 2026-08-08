import { api } from "../../../config/api"

export const getAllRequest = async () => {
    try {
        const response = await api.get("/admin/requests");
        return response.data
    } catch (error) {
        console.log("All Request Error",error)
    }
}

//Take action on vendor's request
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

//Get all pending request

import { api } from "../../../config/api"

export const registerUserApi = async (userData) => {
    try {
        const response = await api.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        console.log("Error in Register Api",error)
        throw error;
    }
};

export const hydrateUser = async () => {
    try {
        const response = await api.get("/auth/profile");
        return response.data;
    } catch(error) {
        console.log("Error in hydration User api", error);
        throw error
    }
}
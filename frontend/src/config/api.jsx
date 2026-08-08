import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true,
})

api.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
                await axios.post(
                    'http://localhost:5000/api/v1/auth/refresh-token', 
                    {}, 
                    { withCredentials: true }
                );
                return api(originalRequest)
        } catch (error) {
            console.log("Refresh Token expired, user must login again.");
            window.location.href="/auth"
        }
    }
})
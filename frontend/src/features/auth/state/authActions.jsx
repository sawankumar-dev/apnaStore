import { createAsyncThunk } from "@reduxjs/toolkit";
import { hydrateUser, registerUserApi } from "../api/authApi";

export const registerUserAction = createAsyncThunk("auth/register", async (userData, thunkApi) => {
    try {
        let res = await registerUserApi(userData);
        return res.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response?.data?.message || "Register Failed"
        );
    }
})
export const hydrateUserAction = createAsyncThunk("auth/profile", async (_, thunkApi) => {
    try {
        const res = await hydrateUser()
        return res.user;
    } catch (error) {
        return thunkApi.rejectWithValue("Unauthorized user",error)
    }
})

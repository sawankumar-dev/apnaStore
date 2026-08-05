import { createAsyncThunk } from "@reduxjs/toolkit";
import { hydrateUser, loginUserApi, registerUserApi } from "../api/authApi";

export const loginUserAction = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        let res = await loginUserApi(credentials)
        return res.user;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response?.data?.message || "Login"
        )
    }
})

export const registerUserAction = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        let res = await registerUserApi(userData);
        return res.user; 
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

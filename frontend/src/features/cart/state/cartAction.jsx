import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const getAllCartAction = createAsyncThunk("cart/getAllCarts", async (_, thunkApi) => {
    try {
        const response = await api.get("/cart");
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})
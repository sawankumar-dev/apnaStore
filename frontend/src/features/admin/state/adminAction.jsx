import { createAsyncThunk } from "@reduxjs/toolkit";
import { approveOrRejectVendorApi, getAllRequest } from "../api/adminApi";

export const getAllRequestAction = createAsyncThunk("admin/request", async (_, thunkApi) => {
    try {
        let res = await getAllRequest()
        return res.data;
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
})
export const approveOrRejectVendorAction = createAsyncThunk("admin/approve-reject", async (data, thunkApi) => {
    try {
        console.log("Data from AdminAction.jsx", data)
        let res = await approveOrRejectVendorApi(data)
        console.log(res)
        return res
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
})
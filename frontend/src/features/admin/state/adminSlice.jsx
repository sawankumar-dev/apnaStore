import { createSlice } from "@reduxjs/toolkit";
import { approveOrRejectVendorAction, getAllCustomersAction, getAllRequestAction } from "./adminAction";

const initialState = {
    stats: null,
    users: [],
    pendingRequests: [],
    selectedRequest: null,
    vendors: [],
    vendorProducts: [],
    isLoading: false,
    error: null,
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllRequestAction.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(getAllRequestAction.fulfilled, (state, action) => {
            state.isLoading = false
            state.pendingRequests = action.payload
        })
        .addCase(getAllRequestAction.rejected, (state,action) => {
            state.isLoading = false
        })
        // Approve and Reject Action Cases
        .addCase(approveOrRejectVendorAction.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(approveOrRejectVendorAction.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        .addCase(approveOrRejectVendorAction.rejected, (state, action) => {
            state.isLoading = false;
        })
        // Get all users
        .addCase(getAllCustomersAction.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getAllCustomersAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        .addCase(getAllCustomersAction.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
})

export default adminSlice.reducer
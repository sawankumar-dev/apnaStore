import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction, registerUserAction } from "./authActions";


const initialState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUserAction.pending, (state, action) => {
            state.isLoading  = true;
        })
        .addCase(registerUserAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(registerUserAction.rejected, (state, action) => {
            state.isLoading = false;
        })
        .addCase(hydrateUserAction.pending, (state, action) => {
            state.isLoading  = true;
        })
        .addCase(hydrateUserAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(hydrateUserAction.rejected, (state, action) => {
            state.isLoading = false;
        })
        .addCase(loginUserAction.pending, (state, action) => {
            state.isLoading  = true;
        })
        .addCase(loginUserAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(loginUserAction.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer
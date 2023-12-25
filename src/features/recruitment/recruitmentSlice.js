import { createSlice } from "@reduxjs/toolkit";
import { sendRecruitment } from "./action";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    token: localStorage.getItem('access_token') || '', 
};

const recruitmentSlice = createSlice({
    initialState,
    name: 'recruitment',
    extraReducers: (builder) => {
        builder
            .addCase(sendRecruitment.fulfilled, (state, action) => {
                const responseData = action.payload?.data;

                if (responseData) {
                    state.token = responseData.token;
                    localStorage.setItem('access_token', responseData.token);
                    state.loading = false;
                    toast.success(responseData.message);
                }
            })
            .addCase(sendRecruitment.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(sendRecruitment.rejected, (state, action) => {
                state.loading = false;
                toast.error(action.error.message);
            });
    },
});

export default recruitmentSlice.reducer;
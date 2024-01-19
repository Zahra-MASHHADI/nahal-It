import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { updateUserInfo , changeUserPassword, changeUserRole } from "./action";
=======
import { updateUserInfo , changeUserPassword , updateUserRole} from "./action";
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const initialState = {
    isLoading: false,
    criterion: false,
}

const userPanelSlice = createSlice({
    name:'userPanel',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(updateUserInfo.fulfilled , (state,action) => {
            console.log(action.payload)
            let {res, newData} = action.payload;
            state.isLoading = false;
            console.log(action)
            if(action.payload.error)
            {
                toast.warning(action.payload.error.data.massage)
            }
            else if(action.payload?.res){
                state.criterion = !state.criterion;
                toast.success(res.massage);
                Cookies.set("user",JSON.stringify(newData.user))
            }
        })
        .addCase(updateUserInfo.pending , (state,action) => {
            state.isLoading = true;
        })
        .addCase(updateUserInfo.rejected , (state,action) => {
            state.isLoading = false;
            toast.error("خطا در ویرایش اطلاعات")
            console.error(action.error)
        })
        .addCase(changeUserRole.fulfilled, (state,action) => {
            state.isLoading = false; 
            if(action.payload.error){
                toast.error(action.payload.error.data.massage)
            }
            else {
                console.log(action)
                toast.success(action.payload.data.massage)
            }
        })
        .addCase(changeUserRole.pending, (state,action) => {
         
            state.isLoading = true; 
        })
        .addCase(changeUserRole.rejected, (state,action) => {
            state.isLoading = false; 
            console.error(action)
        })
        .addCase(changeUserPassword.fulfilled, (state,action) => {
            state.isLoading = false; 
            if(action.payload.error){
                toast.error(action.payload.error.data.massage)
            }
            else {
                toast.success(action.payload.data.massage)
            }
        })
        .addCase(changeUserPassword.pending, (state,action) => {
            state.isLoading = true; 
        })
        .addCase(changeUserPassword.rejected, (state,action) => {
            state.isLoading = false; 
            console.error(action)
        })
        .addCase(updateUserRole.fulfilled , (state,action) => {
            let {res, newData} = action.payload;
            state.isLoading = false;
            console.log(action)
            console.log(newData)
            if(action.payload.error)
            {
                toast.warning(action.payload.error.massage)
            }
            else if(action.payload?.res){
                state.criterion = !state.criterion;
                toast.success(res.massage);
                Cookies.set("user",JSON.stringify(newData.user))
            }
        })
        .addCase(updateUserRole.pending , (state,action) => {
            state.isLoading = true;
        })
        .addCase(updateUserRole.rejected , (state,action) => {
            state.isLoading = false;
            toast.error("خطا در ویرایش اطلاعات")
            console.error(action.error)
        })
    }
});

export default userPanelSlice.reducer;
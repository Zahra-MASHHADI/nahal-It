import { createSlice } from "@reduxjs/toolkit";
import { sendRecruitment } from "./action";
import { toast } from "react-toastify";
import Cookies from "js-cookie";


const initialState = {
<<<<<<< HEAD
    loading: false,
    token: localStorage.getItem('access_token'), 
};
=======
    loading:false,
    token: localStorage.getItem('access_token') || '', 
}
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9

const recruitmentSlice = createSlice({
    initialState,
    name: 'recruitment',
    
    extraReducers: (builder) => {
        builder
<<<<<<< HEAD
            .addCase(sendRecruitment.fulfilled, (state, action) => {
                console.log(action)
                if (action.payload.error) {
                    state.loading = false;
                    toast.error(action.payload.error.data.message);
                   
                    
                }else{
                    state.token = localStorage.getItem('access_token');
                    toast.success(action.payload.data.massage);
                }
                 
            })
            .addCase(sendRecruitment.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(sendRecruitment.rejected, (state, action) => {
                state.loading = false;
                console.log(action)
                console.log(1)
                toast.error(action.payload.message);
            });
    },
});
=======
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
})
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9

export default recruitmentSlice.reducer;
window.addEventListener('beforeunload', () => {
  
    dispatch({ type: sendRecruitment.start });
  });
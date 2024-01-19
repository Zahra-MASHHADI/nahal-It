import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { forgetPassword, login, register, sendCode, verifyCode , loginCode ,verifyOneTimeCode , verifyPasswordCode} from "./action";

const initialState = {
    loading:false,
    message:'',
    redirect:false,
    loginStatus: Cookies.get('user') ? true : false,
    codeSent:false,
    sendCodeLoading:false,
    oneTimeCode : false,
<<<<<<< HEAD
    oneTimeCodeLoading : false,
    verifyPasswordCode :false,
    token:''
}
=======
    verifyPasswordCode :false,
    token: '',
}   
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9

const authenticationSlice = createSlice({
    name:'authentication',
    initialState,
    reducers:{
        changeRedirect : (state,action) => {
            state.redirect = false
        },
        changeLoginStatus : (state) => {
            state.loginStatus = false;
        },
        changeSendCode : (state) => {
            state.codeSent = false;
        }
    },
    extraReducers:( builder ) => {
        builder
        .addCase(register.fulfilled,(state,action) => {
            if(action.payload.error){
                toast.warning(action.payload.error.data.message)
                state.loading = false;
                state.redirect = false;
            }
            else
            {
                state.loading = false;
                state.redirect = true;
<<<<<<< HEAD

=======
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
                toast.success(action.payload.data.massage)
                Cookies.set("user",JSON.stringify(action.payload.data.user))
                localStorage.setItem("access_token",action.payload.data.token)
                state.loginStatus = true;
            }

        })
        .addCase(register.pending,(state) => {
            state.loading = true;
        })
        .addCase(register.rejected,(state,action) => {
            state.loading = false;
            toast.error("!خطایی در ثبت نام پیش آمده است")
        
        })
        .addCase(login.fulfilled,(state,action) => {
            if(action.payload.error){
                state.loading = false;
                state.redirect = false;
                toast.warning(action.payload.error.data?.massage)
<<<<<<< HEAD
       
=======
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
            }
            else
            {
                console.log(action.payload)
                state.loading = false;
                state.redirect = true;
                toast.success(action.payload.data?.massage);
<<<<<<< HEAD
=======
                state.token = action.payload.data.token;
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
                localStorage.setItem("access_token",action.payload.data.token);
                Cookies.set("user",JSON.stringify(action.payload.data.user));
                state.loginStatus = true;
                state.token = action.payload.data.token
            }
        })
        .addCase(login.pending,(state) => {
            state.loading = true;
        })
        .addCase(login.rejected,(state,action) => {
            state.loading = false;
        })
        .addCase(forgetPassword.fulfilled,(state,action) => {
          
            if(action.payload.error) {
               
                state.loading = false;
                toast.warn(action.payload.error.data.message);
                state.redirect = false;
            }
            else
            {
           
                state.loading = false;
                toast.success(action.payload.data.massage);
                state.redirect = true;
            }
        })
        .addCase(forgetPassword.pending,(state) => {
           
            state.loading = true;
        })
        .addCase(forgetPassword.rejected,(state,action) => {
           
            state.loading = false;
            state.redirect = false;
<<<<<<< HEAD
       
=======
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
        })
        .addCase(sendCode.fulfilled,(state,action) => {
            state.sendCodeLoading = false;
            if(action.payload.error) {
                toast.warn(action.payload.error.data?.massage);
                state.codeSent = false;
 
            }
            else
            {
                toast.success(action.payload.data.massage);
                state.codeSent = true;
         
            }
        })
        .addCase(sendCode.pending,(state) => {
            state.sendCodeLoading = true;
        })
        .addCase(sendCode.rejected,(state,action) => {
            state.sendCodeLoading = false;
            state.codeSent = false;
    
        })
        .addCase(verifyCode.fulfilled,(state,action) => {
            state.sendCodeLoading = false;
            if(action.payload.error) {
                toast.warn(action.payload.error.data?.massage);
      
            }
            else
            {
                toast.success(action.payload.data.massage);
                Cookies.set('user',JSON.stringify(action.payload.data.user));
                state.redirect = true;
         
            }
        })
        .addCase(verifyCode.pending,(state) => {
            state.sendCodeLoading = true;
            state.redirect = false;
        })
        .addCase(verifyCode.rejected,(state,action) => {
            state.sendCodeLoading = false;
            state.oneTimeCode = false;
        })
        
        .addCase(loginCode.fulfilled, (state, action) => {
<<<<<<< HEAD
            state.oneTimeCodeLoading = false;
=======
            // state.sendCodeLoading = false;
 
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
            if (action.payload.error) {
         
                toast.warn(action.payload.error.data?.massage);
<<<<<<< HEAD
                state.oneTimeCode = false;
            
            } else {
             
                toast.success(action.payload.data.massage);
                Cookies.set('user',JSON.stringify(action.payload.data.user));
                state.oneTimeCode = true;
=======
                state.codeSent = false;
                state.oneTimeCode = false;
            
            } else {

                state.oneTimeCode = true;
                toast.success(action.payload.data.massage);
                Cookies.set('user',JSON.stringify(action.payload.data.user));
                state.codeSent = true;
               
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
                state.token = action.payload.data.token; 
               
            }
        })
        .addCase(loginCode.pending, (state) => {
            state.oneTimeCodeLoading = true;
            state.oneTimeCode = false;
        })
        .addCase(loginCode.rejected, (state, action) => {
            state.oneTimeCodeLoading = false;
            state.oneTimeCode = false;
   
        })
        .addCase(verifyOneTimeCode.fulfilled,(state,action) => {
            state.oneTimeCodeLoading = false;
            if(action.payload.error) {
                toast.warn(action.payload.error.data?.massage);
            }
            else
            {
                toast.success(action.payload.data.massage);
                Cookies.set('user',JSON.stringify(action.payload.data.user));
                state.redirect = true;
                localStorage.setItem("access_token",action.payload.data.token);
                state.loginStatus = true;
                state.oneTimeCode = false;
            }
        })
        .addCase(verifyOneTimeCode.pending,(state) => {
            state.oneTimeCodeLoading = true;
            state.redirect = false;
        })
        .addCase(verifyOneTimeCode.rejected,(state,action) => {
            state.oneTimeCodeLoading = false;
          
        })
        .addCase(verifyPasswordCode.fulfilled,(state,action) => {
            state.oneTimeCodeLoading = false;
            if(action.payload.error) {
                toast.warn(action.payload.error.data?.massage);
            }
            else
            {
                toast.success(action.payload.data.massage);
                Cookies.set('user',JSON.stringify(action.payload.data.user));
                state.verifyPasswordCode = true;
                localStorage.setItem("access_token",action.payload.data.token);
                state.oneTimeCode = false;
            }
        })
        .addCase(verifyPasswordCode.pending,(state) => {
            state.oneTimeCodeLoading = true;
        })
        .addCase(verifyPasswordCode.rejected,(state,action) => {
            state.oneTimeCodeLoading = false;
        
            state.verifyPasswordCode = false;
        });
    }
})

export const  { changeRedirect , changeLoginStatus , changeSendCode } = authenticationSlice.actions; 

export default authenticationSlice.reducer;
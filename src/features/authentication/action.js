import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../axios_config/axios";

export const register = createAsyncThunk(
  "authentication/register",
  async (dataObj) => {
    try {
      const response = await axios.post(
        "https://api.nahalit.ir/api/v1/users/register",
        dataObj
      );
      return { data: response.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
  }
);

<<<<<<< HEAD
export const login = createAsyncThunk(
  "authentication/login",
  async (dataObj) => {
    try {
      const response = await axios.post(
        "https://api.nahalit.ir/api/v1/users/login",
        dataObj
      );
      return { data: response.data };
=======
export const login = createAsyncThunk('authentication/login', async (dataObj) => {
        try {
        const response = await axios.post('https://api.nahalit.ir/api/v1/users/login',dataObj)
        return { data: response.data }
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
  }
);

export const sendCode = createAsyncThunk(
  "authentication/sendCode",
  async () => {
    try {
      const response = await instance.post("/sms/sendVerify");

<<<<<<< HEAD
      return { data: response.data };
=======
export const loginCode = createAsyncThunk('authentication/loginCode', async (dataObj) => {
    try {
        const response = await axios.post('https://api.nahalit.ir/api/v1/sms/oneTimeCode' , dataObj);
        return { data: response.data }
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
<<<<<<< HEAD
  }
);
=======
});
export const verifyOneTimeCode = createAsyncThunk('authentication/verifyOneTimeCode', async (dataObj) => {
    try {
        const response = await axios.post('https://api.nahalit.ir/api/v1/sms/verifyOneTimeCode',dataObj);
        return { data: response.data }
    } catch (axiosError) {
        let err = axiosError
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.massage,
            }
        }
    }
});
export const verifyPasswordCode = createAsyncThunk('authentication/verifyPasswordCode', async (dataObj) => {
    try {
        const response = await axios.post('https://api.nahalit.ir/api/v1/sms/verifyResetPassword',dataObj);
        return { data: response.data }
    } catch (axiosError) {
        let err = axiosError
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.massage,
            }
        }
    }
});
export const verifyCode = createAsyncThunk('authentication/verifyCode', async (dataObj) => {
    try {
        const response = await instance.post('/sms/verify',dataObj);
        return { data: response.data }
    } catch (axiosError) {
        let err = axiosError
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.massage,
            }
        }
    }
});
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9

export const loginCode = createAsyncThunk(
  "authentication/loginCode",
  async (dataObj) => {
    try {
<<<<<<< HEAD
      const response = await instance.post("/sms/oneTimeCode", dataObj);
      return { data: response.data };
=======
        const response = await axios.post("https://api.nahalit.ir/api/v1/users/doChangePassword",dataObj);
        console.log(response.data)
        return { data: response.data }
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
  }
);
export const verifyOneTimeCode = createAsyncThunk(
  "authentication/verifyOneTimeCode",
  async (dataObj) => {
    try {
      const response = await instance.post("sms/verifyOneTimeCode", dataObj);
      return { data: response.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
  }
);
export const verifyPasswordCode = createAsyncThunk(
  "authentication/verifyPasswordCode",
  async (dataObj) => {
    try {
      const response = await instance.post("/sms/verifyResetPassword", dataObj);
      console.log(response);
      return { data: response.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
  }
);
export const verifyCode = createAsyncThunk(
  "authentication/verifyCode",
  async (dataObj) => {
    try {
      const response = await instance.post("/sms/verify", dataObj);
      return { data: response.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "authentication/forgetPassword",
  async (dataObj) => {
    try {
      const response = await axios.post(
        "https://api.nahalit.ir/api/v1/users/doChangePassword",
        dataObj
      );

      return { data: response.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
  }
);

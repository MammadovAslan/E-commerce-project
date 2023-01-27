import { createSlice } from "@reduxjs/toolkit";

interface CustomerI {
  id: string;
  external_id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  meta?: {};
  created: number;
  updated: number;
}

interface initialStateI {
  customer: CustomerI;
  customerId: string;
  token: string | undefined;
  auth?: boolean | string;
}

const initialState: initialStateI = {
  customer: {} as CustomerI,
  customerId: localStorage.getItem("customerId") || "",
  token: localStorage.getItem("token") || "",
  auth: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.auth = payload;
      return state;
    },
    setCustomer: (state, { payload }) => {
      state.customer = payload;
      return state;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
      return state;
    },
    setCustomerId: (state, { payload }) => {
      state.customerId = payload;
      return state;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setAuth, setCustomer, setToken, setCustomerId } = authSlice.actions;

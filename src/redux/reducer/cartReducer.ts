import { createSlice } from "@reduxjs/toolkit";
import { getCartAction } from "../action/cart";
import { refreshCartAction } from "../action/cart";

interface InitialStateTypes {
  loading: boolean;
  error: null | boolean;
  cart: object;
}

const initialState: InitialStateTypes = {
  loading: false,
  error: null,
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = payload;
      return state;
    },
  },
  extraReducers: {
    [getCartAction.pending]: (state) => {
      state.loading = true;
    },
    [getCartAction.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getCartAction.fulfilled]: (state, { payload }) => {
      state.cart = payload;
      state.loading = false;
      return state;
    },
    [refreshCartAction.pending]: (state) => {
      state.loading = true;
    },
    [refreshCartAction.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [refreshCartAction.fulfilled]: (state, { payload }) => {
      state.cart = payload;
      state.loading = false;
      return state;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { setCart } = cartSlice.actions;

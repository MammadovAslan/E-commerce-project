import { createAsyncThunk } from "@reduxjs/toolkit";
import Commerce from "@chec/commerce.js";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

export const getCartAction: any = createAsyncThunk("cart/getCart", async () => {
  try {
    const data = await commerce.cart.retrieve();
    return data;
  } catch (error) {
    return error;
  }
});
export const refreshCartAction: any = createAsyncThunk("cart/refreshCart", async (_,thunkApi) => {
  try {
    const data = await commerce.cart.refresh();
    return data;
  } catch (error) {
    console.log(error);
    thunkApi.rejectWithValue(error)
  }
});

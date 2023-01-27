import { createAsyncThunk } from "@reduxjs/toolkit";
import Commerce from "@chec/commerce.js";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

export const getCategoriesAction: any = createAsyncThunk(
  "categories/getCategoreis",
  async (_, thunkApi) => {
    try {
      const data = await commerce.categories.list();
      return data.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

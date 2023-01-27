import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAction } from "../action/categories";

interface InitialStateTypes {
  loading: boolean;
  error: null | boolean;
  categories: any;
}

const initialState: InitialStateTypes = {
  loading: false,
  error: null,
  categories:JSON.parse(localStorage.getItem("categories") as string) || [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories:(state,{payload})=>{
      state.categories = payload
      return state
    }
  },
  extraReducers: {
    [getCategoriesAction.pending]: (state) => {
      state.loading = true;
    },
    [getCategoriesAction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [getCategoriesAction.fulfilled]: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
      return state;
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const {setCategories} = categoriesSlice.actions

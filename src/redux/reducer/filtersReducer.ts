import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: false,
  reducers: {
    setFiltersTrue: (state) =>{
        state = true 
        return state
    },
    setFiltersFalse: (state) =>{
        state = false 
        return state
    }
  },
});

export const filtersReducer = filtersSlice.reducer;
export const {setFiltersTrue,setFiltersFalse} = filtersSlice.actions

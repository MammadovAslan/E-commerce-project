import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducer/cartReducer";
import { filtersReducer } from "../reducer/filtersReducer";
import { categoriesReducer } from "../reducer/categoriesReducer";
import { authReducer } from "../reducer/authReducer";
import { checkoutReducer } from "../reducer/checkoutReducer";

export const store = configureStore({
    reducer:{
        cart :cartReducer,
        filters:filtersReducer,
        categories:categoriesReducer,
        auth:authReducer,
        checkout:checkoutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import {configureStore} from "@reduxjs/toolkit";
import filtersSlice from "../slices/filtersSlice.js";
import cartSlice from "../slices/cartSlice.js";

export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        cart: cartSlice,
    },
});
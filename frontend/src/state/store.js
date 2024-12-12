import {configureStore} from "@reduxjs/toolkit";
import filtersSlice from "../slices/filtersSlice.js";
import cartSlice from "../slices/cartSlice.js";
import tableSlice from "../slices/tableSlice.js";
import returnsSlice from "../slices/returnsSlice.js";
import userSlice from "../slices/userSlice.js";

export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        cart: cartSlice,
        table: tableSlice,
        returns: returnsSlice,
        user: userSlice,
    },
});
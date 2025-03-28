import {configureStore} from "@reduxjs/toolkit";
import filtersSlice from "../slices/filtersSlice";
import cartSlice from "../slices/cartSlice";
import tableSlice from "../slices/tableSlice";
import returnsSlice from "../slices/returnsSlice";
import userSlice from "../slices/userSlice";

export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        cart: cartSlice,
        table: tableSlice,
        returns: returnsSlice,
        user: userSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
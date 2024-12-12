import {createSlice} from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: "table",
    initialState: {
        tableRefresh: false,
    },
    reducers: {
        setTableRefresh: (state, action) => {
            state.tableRefresh = action.payload;
        },
    }
})

export const {setTableRefresh} = tableSlice.actions;

export default tableSlice.reducer;
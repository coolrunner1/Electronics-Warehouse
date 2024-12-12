import {createSlice} from "@reduxjs/toolkit";

const returnsSlice = createSlice({
    name: "returns",
    initialState: {
        itemReturn: null,
    },
    reducers: {
        setItemReturn: (state, action) => {
            state.itemReturn = action.payload;
        },
    }
})

export const {setItemReturn} = returnsSlice.actions;

export default returnsSlice.reducer;
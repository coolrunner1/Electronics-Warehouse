import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        userRefresh: false,
    },
    reducers: {
        setUserRefresh: (state, action) => {
            state.userRefresh = action.payload;
        },
    }
})

export const {setUserRefresh} = usersSlice.actions;

export default usersSlice.reducer;
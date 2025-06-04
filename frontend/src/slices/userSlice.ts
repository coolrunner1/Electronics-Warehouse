import {createSlice} from "@reduxjs/toolkit";

/*
ToDo: Replace with AuthContext and RoleContext
*/
const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload;
        },
    }
})

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
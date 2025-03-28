import {createSlice} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        category: "all",
        manufacturer: "all",
        sortBy: "Price",
        sortingDirection: "Ascending",
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setManufacturer: (state, action) => {
            state.manufacturer = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setSortingDirection: (state, action) => {
            state.sortingDirection = action.payload;
        }
    }
})

export const {setCategory, setManufacturer, setSortBy, setSortingDirection} = filtersSlice.actions;

export default filtersSlice.reducer;
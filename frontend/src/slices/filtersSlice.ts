import {createSlice} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        category: "all",
        manufacturer: "all",
        sortBy: "Price",
        sortingDirection: "Ascending",
        inStock: "all",
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
        },
        setInStock: (state, action) => {
            state.inStock = action.payload;
        }
    }
})

export const {setCategory, setManufacturer, setSortBy, setSortingDirection, setInStock} = filtersSlice.actions;

export default filtersSlice.reducer;
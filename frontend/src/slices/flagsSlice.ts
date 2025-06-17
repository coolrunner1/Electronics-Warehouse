import {createSlice} from '@reduxjs/toolkit'

const flagsSlice = createSlice({
    name: 'flags',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            document.body.classList.toggle('dark');
            localStorage.setItem('darkMode', state.darkMode.toString());
        },
        setFlagsFromLocalStorage: (state) => {
            const darkMode = localStorage.getItem('darkMode');
            if (darkMode) {
                state.darkMode = darkMode === 'true';
            } else {
                state.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            }
            if (state.darkMode) {
                document.body.classList.add('dark');
            }
        }
    }
});

export const {setFlagsFromLocalStorage, toggleDarkMode} = flagsSlice.actions;
export default flagsSlice.reducer;
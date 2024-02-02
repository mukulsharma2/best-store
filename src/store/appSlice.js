import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        isLoading: false,
        data: [],
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        setLoadingTrue: (state) => {
            state.isLoading = true
        },
        setLoadingFalse: (state) => {
            state.isLoading = false
        },
        addData: (state, action) => {
            state.data = action.payload
        },
    },
})

export default appSlice.reducer;
export const {toggleMenu, setLoadingTrue, setLoadingFalse, addData} = appSlice.actions;
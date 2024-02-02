import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        isLoading: false,
        data: [],
        isSingleLoading: false,
        singleData: {},
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
        setSingleLoadingTrue: (state) => {
            state.isSingleLoading = true
        },
        setSingleLoadingFalse: (state) => {
            state.isSingleLoading = false
        },
        addData: (state, action) => {
            state.data = action.payload
        },
        addSingleData: (state, action) => {
            state.singleData = action.payload
        },
    },
})

export default appSlice.reducer;
export const {toggleMenu, setLoadingTrue, setLoadingFalse,setSingleLoadingTrue,setSingleLoadingFalse, addData, addSingleData} = appSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        showGridView: true,
        sortedData: [],
    },
    reducers: {
        setGridView: (state)=>{
            state.showGridView = true
        },
        setListView: (state)=>{
            state.showGridView = false
        },
        setSortedData: (state, action)=>{
            state.sortedData = action.payload
        },
        sortProducts: (state, action)=>{
            const fn = (a, b) => {
                if (action.payload === "lowest")return a.price - b.price;
                if (action.payload === "highest")return b.price - a.price;
                if (action.payload === "a-z") return a.name.localeCompare(b.name);
                if (action.payload === "z-a")return  b.name.localeCompare(a.name);
              }
            state.sortedData.sort(fn);
        },
    },
})

export default productSlice.reducer
export const {setGridView, setListView, setSortedData, sortProducts} =  productSlice.actions
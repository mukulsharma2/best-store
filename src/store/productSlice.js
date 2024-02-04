import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        showGridView: true,
    },
    reducers: {
        setGridView: (state)=>{
            state.showGridView = true
        },
        setListView: (state)=>{
            state.showGridView = false
        },
    },
})

export default productSlice.reducer
export const {setGridView, setListView} =  productSlice.actions
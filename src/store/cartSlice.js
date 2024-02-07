import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(currEle=> currEle !== action.payload)
        },
        clearCart: (state, action) => {
            // state.cartItems = state.cartItems.filter(currEle=> currEle !== action.payload)
        },
    },
})

export default cartSlice.reducer;
export const {addToCart, removeItem, clearCart} = cartSlice.actions;
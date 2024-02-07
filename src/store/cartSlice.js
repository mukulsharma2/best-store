import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push({...action.payload, uniqueId: action.payload.id + action.payload.selectedColor,})
        },
        removeItem: (state, action) => {
            console.log(state.cartItems);
            state.cartItems = state.cartItems.filter(currEle=> currEle.uniqueId !== action.payload)
            console.log(state.cartItems);
        },
        clearCart: (state, action) => {
            // state.cartItems = state.cartItems.filter(currEle=> currEle !== action.payload)
        },
    },
})

export default cartSlice.reducer;
export const {addToCart, removeItem, clearCart} = cartSlice.actions;
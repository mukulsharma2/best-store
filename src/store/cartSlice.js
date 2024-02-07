import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const duplicateItemArr = state.cartItems.filter(currEle=> currEle.uniqueId === action.payload.uniqueId)

            if(duplicateItemArr.length === 1){
                const restItems = state.cartItems.filter(currEle=> currEle.uniqueId !== duplicateItemArr[0].uniqueId)
                state.cartItems = [...restItems, {...duplicateItemArr[0], quantity: (duplicateItemArr[0].quantity + action.payload.quantity)}]
            }else{state.cartItems.push(action.payload)}
        },
        removeItem: (state, action) => {
            console.log(state.cartItems);
            state.cartItems = state.cartItems.filter(currEle=> currEle.uniqueId !== action.payload)
            console.log(state.cartItems);
        },
        clearCart: (state) => {
            state.cartItems = []
        },
    },
})

export default cartSlice.reducer;
export const {addToCart, removeItem, clearCart} = cartSlice.actions;
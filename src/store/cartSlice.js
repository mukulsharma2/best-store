import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const {uniqueId, quantity, stock} = action.payload
            const duplicateItemArr = state.cartItems.filter(currEle=> currEle.uniqueId === uniqueId)

            if(duplicateItemArr.length === 1){
                const restItems = state.cartItems.filter(currEle=> currEle.uniqueId !== uniqueId)
                const combinedQty = duplicateItemArr[0].quantity + quantity
                const newQty = (combinedQty >= stock) ? stock : combinedQty
                state.cartItems = [...restItems, {...duplicateItemArr[0], quantity: newQty}]
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
        toggleQty: (state, action) => {
            const {type, stock, uniqueId} = action.payload

            const filteredArr = state.cartItems.filter(currEle=> currEle.uniqueId === uniqueId)
            const restItems = state.cartItems.filter(currEle=> currEle.uniqueId !== uniqueId)

                    if(type === 'increase' && filteredArr[0].quantity < stock){
                        state.cartItems = [...restItems, {...filteredArr[0], quantity: filteredArr[0].quantity + 1}] 
                    }

                    if(type === 'decrease' && filteredArr[0].quantity > 1){
                        state.cartItems = [...restItems, {...filteredArr[0], quantity: filteredArr[0].quantity - 1}] 
                    }
        },
    },
})

export default cartSlice.reducer;
export const {addToCart, removeItem, clearCart, toggleQty} = cartSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { uniqueId, quantity, stock } = action.payload;
      // filtering same cart item as provided in action.payload
      const duplicateItemArr = state.cartItems.filter(
        (currEle) => currEle.uniqueId === uniqueId
      );
      // if duplicate item exist then update quantity otherwise add the current item to cartItems
      if (duplicateItemArr.length === 1) {
        // cart items except duplicate item
        const restItems = state.cartItems.filter(
          (currEle) => currEle.uniqueId !== uniqueId
        );
        // increasing quantity
        const combinedQty = duplicateItemArr[0].quantity + quantity;
        const newQty = combinedQty >= stock ? stock : combinedQty;
        // updating cartItems with updated quantity
        state.cartItems = [
          ...restItems,
          { ...duplicateItemArr[0], quantity: newQty },
        ];
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (currEle) => currEle.uniqueId !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    toggleQty: (state, action) => {
      const { type, stock, uniqueId } = action.payload;

      const filteredArr = state.cartItems.filter(
        (currEle) => currEle.uniqueId === uniqueId
      );
      const restItems = state.cartItems.filter(
        (currEle) => currEle.uniqueId !== uniqueId
      );
      // only toggle quantity when product is in stock
      if (type === "increase" && filteredArr[0].quantity < stock) {
        state.cartItems = [
          ...restItems,
          { ...filteredArr[0], quantity: filteredArr[0].quantity + 1 },
        ];
      }

      if (type === "decrease" && filteredArr[0].quantity > 1) {
        state.cartItems = [
          ...restItems,
          { ...filteredArr[0], quantity: filteredArr[0].quantity - 1 },
        ];
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem, clearCart, toggleQty } =
  cartSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        product: productSlice,
        cart: cartSlice,
    }
})

export default store;
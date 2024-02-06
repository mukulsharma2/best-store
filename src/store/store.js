import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        product: productSlice,
    }
})

export default store;
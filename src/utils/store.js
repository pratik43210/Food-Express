import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store=configureStore({
    // store will contain slices
    reducer:{
        cart:cartSlice,
    },
});

export default store;
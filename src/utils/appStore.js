import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

/**
 * This is main store
 * we need to use configureStore that takes an object having reducers
 * we will add here multiple reducers based on multiple slices
 */

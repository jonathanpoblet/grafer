import { configureStore } from "@reduxjs/toolkit";
import products from "./state/productsSlice";
import user from "./state/userSlice"

export const store = configureStore({
  reducer: {
    products,
    user
  },
});

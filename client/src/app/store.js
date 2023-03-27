import { configureStore } from "@reduxjs/toolkit";
import products from "./state/productsSlice";

export const store = configureStore({
  reducer: {
    products,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./features/sample/sampleSlice";
import productReducer from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    sample: sampleReducer,
    products: productReducer,
  },
});

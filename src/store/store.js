import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import productDetailsReducer from "./features/productDetails/productDetailsSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailsReducer,
  },
});

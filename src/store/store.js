import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./features/sample/sampleSlice.js";
import userReducer from "./features/user/userSlice.js";

export const store = configureStore({
  reducer: {
    sample: sampleReducer,
    user: userReducer,
  },
});

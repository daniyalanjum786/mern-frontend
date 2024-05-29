import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetailsAsync = createAsyncThunk(
  "product/fetchProductDetailsAsync",
  async (id) => {
    const data = await axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/products/product/${id}`, {
        withCredentials: true, // Axios automatically sends cookies when using withCredentials
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => error);
    return data;
  }
);
const initialState = {
  productDetails: {},
  status: "idle",
  error: null,
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetailsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetailsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetailsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};
// Async thunk to fetch user details
export const fetchUserDetailsAsync = createAsyncThunk(
  "user/fetchUserDetails",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/users/profile`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
    rehydrateUserDetails: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetailsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDetailsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserDetailsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails, rehydrateUserDetails } = userSlice.actions;

export default userSlice.reducer;

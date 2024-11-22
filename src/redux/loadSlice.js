import { createSlice } from "@reduxjs/toolkit";

const loadSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadSlice.actions;

export default loadSlice.reducer;

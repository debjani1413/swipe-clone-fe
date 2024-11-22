import { createSlice } from "@reduxjs/toolkit";

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    uploadMessage: "",
    uploadResponse: null,
    tableData: [],
  },
  reducers: {
    setUploadMessage: (state, action) => {
      state.uploadMessage = action.payload;
    },
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
  },
});

export const { setUploadMessage, setTableData } = uploadSlice.actions;

export default uploadSlice.reducer;

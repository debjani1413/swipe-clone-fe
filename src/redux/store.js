import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./uploadSlice";
import loadingReducer from "./loadSlice";

const store = configureStore({
  reducer: {
    upload: uploadReducer,
    loading: loadingReducer,
  },
});

export default store;

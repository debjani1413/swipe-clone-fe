import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./uploadSlice";
import loadingReducer from "./loadSlice";
import activeReducer from "./activeSlice";

const store = configureStore({
  reducer: {
    upload: uploadReducer,
    loading: loadingReducer,
    active: activeReducer,
  },
});

export default store;

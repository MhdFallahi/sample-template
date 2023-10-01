import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./apiSlice";

export default configureStore({
  reducer: {
    // XXX: XXXSlice,
    //   // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
});

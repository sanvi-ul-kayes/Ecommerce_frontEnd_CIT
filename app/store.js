import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/UserSlice";

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

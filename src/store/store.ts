import { configureStore } from "@reduxjs/toolkit";
import claimReducer from "./claimSlice";

export const store = configureStore({
  reducer: {
    claims: claimReducer,
  },
});

// Type-safe access ke state di component
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

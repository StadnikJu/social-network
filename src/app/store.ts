import { postsSlice } from "@/features/profile/model/profileSlice";
import { usersSlice } from "@/features/users/model/users-slice";
import { messengerSlice } from "@/features/messenger/model/messengerSlice"
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appReducer, appSlice } from "./model/appSlice";

export const store = configureStore({
  reducer: {
    [messengerSlice.name]: messengerSlice.reducer,
    [postsSlice.reducerPath]: postsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [appSlice.name]: appReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { messengerReducer } from "../features/messenger/model/messengerSlice";
import { postsReducer } from "../features/profile/model/ProfileSlice";

const rootReducer = combineReducers({
  messengerPage: messengerReducer,
  postsPage: postsReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

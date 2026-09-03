import { RequestStatus } from "@/common/types/requestStatus";
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    status: "idle" as RequestStatus,
  },
  selectors: {
    selectAppStatus: (state) => state.status,
  },
  reducers: (create) => ({
    setAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
        state.status = action.payload.status;
      },
    ),
  }),
});

export const { selectAppStatus } = appSlice.selectors;
export const { setAppStatusAC } = appSlice.actions;
export const appReducer = appSlice.reducer;

export type ThemeMode = "dark" | "light";

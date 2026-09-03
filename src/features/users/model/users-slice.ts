import { User, UsersResponse } from "@/common/types/users";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../api/usersApi";
import { createAppSlice } from "@/common/utils";
import { setAppStatusAC } from "@/app/model/appSlice";

type UsersState = {
  items: User[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

export const usersSlice = createAppSlice({
  name: "users",
  reducerPath: "users",
  initialState: {
    items: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
  } as UsersState,
  selectors: {
    selectUsers: (state) => state.items,
    selectPageSize: (state) => state.pageSize,
    selectTotalCount: (state) => state.totalUsersCount,
    selectCurrentPage: (state) => state.currentPage,
  },

  reducers: (create) => ({
    followAC: create.reducer<number>((state, action) => {
      const user = state.items.find((user) => user.id === action.payload);
      if (user) {
        user.followed = true;
      }
    }),
    unfollowAC: create.reducer<number>((state, action) => {
      const user = state.items.find((user) => user.id === action.payload);
      if (user) {
        user.followed = false;
      }
    }),
    setUsersAC: create.reducer<UsersResponse>((state, action) => {
      state.items = action.payload.items;
      state.totalUsersCount = action.payload.totalCount;
    }),
    setCurrentPageAC: create.reducer<number>((state, action) => {
      state.currentPage = action.payload;
    }),
    fetchUsersTC: create.asyncThunk(
      async (args: { currentPage: number; pageSize: number }, { dispatch, rejectWithValue }) => {
        try {
          dispatch(setAppStatusAC({ status: 'loading' }));
          const res = await usersApi.getUsers(args.currentPage, args.pageSize);
           dispatch(setAppStatusAC({ status: 'succeeded' }));
          return res.data;
        } catch (error) {
          dispatch(setAppStatusAC({ status: 'failed' }))
          return rejectWithValue(null);
        }
      },
      {
        fulfilled: (state, action) => {
          state.items = action.payload.items;
          state.totalUsersCount = action.payload.totalCount;
        },
      }
    ),
  }),
});

export const { followAC, unfollowAC, setUsersAC, setCurrentPageAC, fetchUsersTC } =
  usersSlice.actions;
export const {
  selectUsers,
  selectPageSize,
  selectTotalCount,
  selectCurrentPage,
} = usersSlice.selectors;
export const usersReducer = usersSlice.reducer;

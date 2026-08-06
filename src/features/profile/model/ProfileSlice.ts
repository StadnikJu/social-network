import { Post } from "@/common/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PostsState = {
  posts: Post[];
};

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPostAC(state, action: PayloadAction<Post>) {
      state.posts.unshift(action.payload);
    },
    likePostAC(state, action: PayloadAction<number>) {
      const post = state.posts.find((p) => p.id === action.payload);

      if (post) {
        post.likesCount += 1;
      }
    },
    deletePostAC(state, action: PayloadAction<number>) {
      const post = state.posts.findIndex((p) => p.id === action.payload);

      if (post !== -1) {
        state.posts.splice(post, 1);
      }
    },
  },
});

export const { addPostAC, likePostAC, deletePostAC } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

import { Post } from "@/common/types/post";
import { createSlice } from "@reduxjs/toolkit";

type PostsState = {
  posts: Post[];
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: {posts: []} as PostsState,
  selectors: {
    selectPosts: (state) => state.posts,
  },

  reducers: (create) => {
    return {
      addPostAC: create.reducer<Post>((state, action) => {
        state.posts.unshift(action.payload);
      }),
      likePostAC: create.reducer<number>((state, action) => {
              const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.likesCount += 1;
      }
      }),
      deletePostAC: create.reducer<number>((state, action) => {
              const post = state.posts.findIndex((p) => p.id === action.payload);
      if (post !== -1) {
        state.posts.splice(post, 1);
      }
      })
    };
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { addPostAC, likePostAC, deletePostAC } = postsSlice.actions;
export const { selectPosts } = postsSlice .selectors;
export const postsReducer = postsSlice.reducer;

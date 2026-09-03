import { MessengerState } from "@/common/types/messenger";
import { createSlice } from "@reduxjs/toolkit";

export const messengerSlice = createSlice({
  name: "messenger",
  initialState: {
    dialogs: [
      {
        id: 1,
        name: "Yuliia Stadnyk",
        message: "Hello",
        time: "",
        img: "avatar.jpg",
      },

      {
        id: 2,
        name: "Sophia Chen",
        message: "How are you?",
        time: "",
        img: "avatar.jpg",
      },
    ],
    messages: [],
    activeDialogId: 1,
    messageText: "",
  } as MessengerState,
  selectors: {
    selectMessages: (state) => state.messages,
    selectDialogs: (state) => state.dialogs,
    selectMessageText: (state) => state.messageText,
  },

  reducers: (create) => {
    return {
      setActiveDialogAC: create.reducer<number>((state, action) => {
        state.activeDialogId = action.payload;
      }),
      updateMessageAC: create.reducer<string>((state, action) => {
        state.messageText = action.payload;
      }),
      sendMessageAC: create.reducer((state) => {
        state.messages.push({
          id: Date.now(),
          text: state.messageText,
          time: "now",
          img: "avatar.jpg",
        });
        state.messageText = "";
        })
    };
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { setActiveDialogAC, updateMessageAC, sendMessageAC } = messengerSlice .actions;
export const { selectMessages, selectDialogs, selectMessageText } = messengerSlice.selectors;
export const postsReducer = messengerSlice .reducer;

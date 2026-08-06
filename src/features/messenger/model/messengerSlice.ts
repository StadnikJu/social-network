import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Dialog = {
  id: number;
  name: string;
  img: string;
};

type Message = {
  id: number;
  dialogId: number;
  text: string;
  time: string;
  img: string;
};

type MessengerState = {
  dialogs: Dialog[];

  messages: Message[];

  activeDialogId: number | null;
};

const initialState: MessengerState = {
  dialogs: [
    {
      id: 1,
      name: "Yuliia Stadnyk",
      img: "avatar.jpg",
    },

    {
      id: 2,
      name: "Sophia Chen",
      img: "avatar.jpg",
    },
  ],

  messages: [
    {
      id: 1,
      dialogId: 1,
      text: "Thanks for subscribing 💕",
      time: "10m ago",
      img: "avatar.jpg",
    },

    {
      id: 2,
      dialogId: 1,
      text: "Hello Yuliia",
      time: "5m ago",
      img: "avatar.jpg",
    },

    {
      id: 3,
      dialogId: 2,
      text: "Check my artwork",
      time: "2m ago",
      img: "avatar.jpg",
    },
  ],

  activeDialogId: 1,
};

const messengerSlice = createSlice({
  name: "messenger",

  initialState,

  reducers: {
    setActiveDialog(state, action: PayloadAction<number>) {
      state.activeDialogId = action.payload;
    },

    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
  },
});

export const { setActiveDialog, addMessage } = messengerSlice.actions;

export const messengerReducer = messengerSlice.reducer;

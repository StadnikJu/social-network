export type Dialog = {
  id: number;
  name: string;
  message: string;
  time: string;
  img: string;
};

export type MessageData = {
  id: number;
  text: string;
  time: string;
  img: string;
};

export type MessengerState = {
  dialogs: Dialog[];
  messages: MessageData[];
  activeDialogId: number | null;
  messageText: string;
};
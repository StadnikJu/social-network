import { DialogTitle } from "./Dialog/DialogTitle";
import { MessageTitle } from "./Messages/MessageTitle";
import s from "./Dialogs.module.css";

export const Dialogs = () => {
  return (
    <div className={s.messengerContainer}>
      <DialogTitle />
      <MessageTitle />
    </div>
  );
};

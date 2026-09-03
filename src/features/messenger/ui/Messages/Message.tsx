import { MessageData } from "@/common/types/messenger";
import s from "./Message.module.css";

export const Message = ({ text, time, img }: MessageData) => {
  return (
    <div className={s.messagesArea}>
      {/* Входящее сообщение от нее */}
      <div className={s.messageRow}>
        <img src={img} alt="Emma" className={s.msgAvatar} />
        <div className={s.msgContentWrapper}>
          <div className={s.incomingMessage}>{text}</div>
          <span className={s.msgTime}>{time}</span>
        </div>
      </div>

      {/* Исходящее сообщение от вас (Фирменный градиент) */}
      {/* <div className={`${s.messageRow} ${s.myMessageRow}`}>
        <div className={s.msgContentWrapper}>
          <div className={s.outgoingMessage}>{message}</div>
          <span className={s.msgTime}>{time}</span>
        </div>
      </div> */}
    </div>
  );
};
import s from "./Message.module.css";

export type Props1 = {
  id: number,
  message: string;
  time: string;
  img: string;
};

export const Message = ({ message, time, img }: Props1) => {
  return (
    <div className={s.messagesArea}>
      <div className={s.dateDivider}>Today</div>

      {/* Входящее сообщение от нее */}
      <div className={s.messageRow}>
        <img src={img} alt="Emma" className={s.msgAvatar} />
        <div className={s.msgContentWrapper}>
          <div className={s.incomingMessage}>{message}</div>
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
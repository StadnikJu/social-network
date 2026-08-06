import { Message } from "../Message";
import s from "./MessageHeader.module.css";

export type MessageHeaderProps = {
  name: string;
  isActive: boolean;
  img: string;
};

export const MessageHeader = ({ name, isActive, img }: MessageHeaderProps) => {
  return (
    <header className={s.activeChatHeader}>
      <img src={img} alt="Emma" className={s.userAvatar} />
      <div>
        <h3 className={s.activeUserName}>{name}</h3>
        <span className={s.userStatus}>{isActive}</span>
      </div>
    </header>
  );
};


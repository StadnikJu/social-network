import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

export type Props = {
  id: number;
  name: string;
  time: string;
  message: string;
  img: string;
};

export const DialogItem = ({ name, time, message, img, id }: Props) => {
  const path = `message/${id}`;

  return (
    <>
      <NavLink to={path}>
        <div className={`${s.chatItem} ${s.activeChat}`}>
          <img src={img} alt="Emma" className={s.userAvatar} />
          <div className={s.chatInfo}>
            <div className={s.chatHeaderRow}>
              <span className={s.userName}>{name}</span>
              <span className={s.chatTime}>{time}</span>
            </div>
            <p className={s.lastMessage}>{message}</p>
          </div>
        </div>
      </NavLink>
    </>
  );
};
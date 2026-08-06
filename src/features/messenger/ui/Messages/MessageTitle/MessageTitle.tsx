import { Message } from "../Message";
import { MessageHeader } from "../MessageHeader/MessageHeader";
import s from "./MessageTitle.module.css";

export const MessageTitle = () => {
  const messagesData = [
    {id: 1, massage: "Thanks for subscribing! 💕", time: "10m ago", img: "https://unsplash.com"},
    {id: 2, massage: "Thanks for subscribing! 💕", time: "10m ago", img: "https://unsplash.com"},
  ]

  return (
    <main className={s.chatWindow}>
      <MessageHeader name={"Emma Wilson"} isActive={false} img={"https://unsplash.com"}/>
      {messagesData.map((e) => {
        return (
          <Message key={e.id} id={e.id} message={e.massage} time={e.time} img={e.img} />
        )
      })}
    </main>
  );
};
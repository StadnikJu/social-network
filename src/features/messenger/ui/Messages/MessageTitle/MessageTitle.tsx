import { useAppSelector } from "@/common/hooks";
import { Message } from "../Message";
import { MessageHeader } from "../MessageHeader/MessageHeader";
import s from "./MessageTitle.module.css";
import { MessageInput } from "./MessageInput/MessageInput";
import { selectMessages } from "@/features/messenger/model/messengerSlice";

export const MessageTitle = () => {
  const messagesData = useAppSelector(selectMessages);

  return (
    <main className={s.chatWindow}>
      <MessageHeader
        name={"Yullia Stadnyk"}
        isActive={false}
        img={"https://unsplash.com"}
      />
      <div className={s.messagesScrollArea}>
        <div className={s.dateDivider}>Today</div>
        {messagesData && messagesData.map((e) => {
          return (
            <Message
              key={e.id}
              id={e.id}
              text={e.text}
              time={e.time}
              img={e.img}
            />
          );
        })}
      </div>

      <MessageInput />
    </main>
  );
};

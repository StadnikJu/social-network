import { Button } from "@/common/components";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { selectMessageText,  sendMessageAC,  updateMessageAC } from "@/features/messenger/model/messengerSlice";
import s from "./MessageInput.module.css";

export const MessageInput = () => {
    const dispatch = useAppDispatch();
    const messageText = useAppSelector(selectMessageText);

    const onSendMessageHandler = () =>{
        if (!messageText.trim()) return;
        dispatch(sendMessageAC());
    }
    const updateMessageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateMessageAC(e.target.value))
    }

    return (
        <div className={s.inputPanelWrapper}>

            <div className={s.leftIconsGroup}>
                <button className={s.iconButton}>🖼️</button>
                <button className={s.iconButton}>📎</button>
            </div>

            <div className={s.inputContainer}>
                <textarea
                    value={messageText}
                    onChange={updateMessageHandler}
                    className={s.messageInput}
                    placeholder="Type a message..."
                    rows={1}
                />
            </div>
            <Button text={"Send"} onClick={onSendMessageHandler}/>
         </div>
    )
}
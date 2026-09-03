import { useAppSelector } from "@/common/hooks";
import { DialogItem } from "../DialogItem/DialogItem";
import s from "./DialogTitle.module.css";
import { selectDialogs } from "@/features/messenger/model/messengerSlice";

export const DialogTitle = () => {
  const dialogsData = useAppSelector(selectDialogs);

  return (
    <aside className={s.chatsSidebar}>
      <h2 className={s.sectionTitle}>Messages</h2>
      <div className={s.searchWrapper}>
        <span className={s.searchIcon}>🔍</span>
        <input type="text" className={s.searchInput} placeholder="Search messages..." />
      </div>
      <div className={s.chatsList}>
        {dialogsData.map((e) => {
          return (
            <DialogItem key={e.id} id={e.id} name={e.name} time={e.time} message={e.message} img={e.img} />
          )
        })}
      </div>
    </aside>
  );
};
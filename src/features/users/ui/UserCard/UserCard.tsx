import { Button } from "@/common/components";
import { User } from "@/common/types/users";
import s from "./UserCard.module.css";

type Props = {
  user: User;
  onFollow: (userId: number) => void;
  onUnfollow: (userId: number) => void;
};

export const UserCard = ({ user, onFollow, onUnfollow }: Props) => {
  return (
    <article key={user.id} className={s.cardWrapper} tabIndex={0}>
     
      <div className={s.headerImages}>
        <img src={user.photos.large ?? "#"}/>
        <div className={s.coverImagePlaceholder} />
      </div> 

      <div className={s.avatarContainer}>
        <img src={user.photos.small ?? "#"} alt="avatar" className={s.avatarImage} />
      </div>

      <div className={s.cardContent}>
        <h3 className={s.creatorName}>
          {user.name}
          {/* {user.isOnline && <span className={s.verifiedBadge}>🔵</span>} */}
        </h3>
        <span className={s.creatorBio}>
            {"Ukraine" } {"Zaporizhzhay"}
        </span>

        <span className={s.creatorUsername}>
          @{user.name?.toLowerCase().replace(/\s+/g, "")}
        </span>

        <p className={s.creatorBio}>{user.status || "No status available"}</p>

        <div className={s.statsRow}>
          <span className={s.statItem}>
            {/* <strong>{user.subscribes}</strong> subscribers */}
          </span>
          <span className={s.statItem}>
            {/* <strong>{user.posts}</strong> posts */}
          </span>
        </div>

        <div className={s.footerRow}>
          <Button 
            text={user.followed ? "Unsubscribe" : "Subscribe"} 
            variant={user.followed ? "subscribed" : "default"}
            onClick={() =>  user.followed ? onUnfollow(user.id) : onFollow(user.id)}
          />
        </div>
      </div>
    </article>
  );
};

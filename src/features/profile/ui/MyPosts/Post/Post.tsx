import { Button } from "@/common/components";
import { Post as PostType } from "@/common/types";
import s from "./Post.module.css";
import { useAppDispatch } from "@/common/hooks";
import { deletePostAC, likePostAC } from "@/features/profile/model/ProfileSlice";

export type Props = {
  data: PostType
}

export const Post = ({ data }: Props) => {

  const dispatch = useAppDispatch();

  return (
    <article className={s.postCard}>
      <div className={s.postHeader}>
        <div className={s.avatarWrapper}>
          <img src={data.avatar} alt="Avatar" className={s.avatar} />
        </div>
        <div className={s.authorInfo}>
          <h3 className={s.authorName}>
            {data.author} <span className={s.verified}>L</span>
          </h3>
          <span className={s.postTime}>{data.time}</span>
        </div>
      </div>

      <p className={s.postText}>{data.text}</p>

      {data.image && (
        <div className={s.imageContainer}>
          <img src={data.image} alt="Post content" className={s.postImage} />
        </div>
      )}

      <div className={s.postFooter}>
        <Button type="submit" className={s.submitBtn} text="delete" onClick={() => dispatch(deletePostAC(data.id))}/>
        <button className={s.actionButton} onClick={() => dispatch(likePostAC(data.id))}><span className={s.actionIcon}>❤️</span>{data.likesCount}</button>
        <button className={s.actionButton}><span className={s.actionIcon}>💬</span> 0</button>
        <button className={s.actionButton}><span className={s.actionIcon}>🔄</span> 0</button>
      </div>
    </article>
  );
};

import { Post as PostType } from "@/common/types/post";
import { Post } from "../Post";
import s from "./Feed.module.css";

type Props = {
  posts: PostType[];
};

export const Feed = ({ posts }: Props) => {
  return (
    <div className={s.feedContainer}>
      <div className={s.postsList}>
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
};

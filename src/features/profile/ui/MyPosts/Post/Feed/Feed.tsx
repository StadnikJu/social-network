import { Data, Post } from "../Post";
import s from "./Feed.module.css";

type Props = {
  posts: Data[];
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

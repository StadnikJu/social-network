import { CreatePost } from "./Post/CreatePost/CreatePost";
import { Feed } from "./Post/Feed/Feed";
import s from "./MyPosts.module.css";
import { useAppSelector } from "@/common/hooks";

export const MyPosts = () => {
  const posts = useAppSelector(state => state.postsPage.posts);

  return (
    <div className={s.myPostsContainer}>
      <CreatePost />
      <Feed posts={posts}/>
    </div>
  );
};

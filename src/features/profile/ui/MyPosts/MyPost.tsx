import { CreatePost } from "./Post/CreatePost/CreatePost";
import { Feed } from "./Post/Feed/Feed";
import { useAppSelector } from "@/common/hooks";
import s from "./MyPosts.module.css";
import { selectPosts } from "../../model/profileSlice";

export const MyPosts = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <div className={s.myPostsContainer}>
      <CreatePost />
      <Feed posts={posts}/>
    </div>
  );
};

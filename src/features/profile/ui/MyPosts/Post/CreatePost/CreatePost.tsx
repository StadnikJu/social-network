import { FormEvent, useState } from "react";
import { PostHeader } from "./PostHeader/PostHeader";
import { useAppDispatch } from "@/common/hooks";
import { addPostAC } from "@/features/profile/model/profileSlice";
import { Post } from "@/common/types/post";
import { Button } from "@/common/components";
import s from "./CreatePost.module.css";

export const CreatePost = () => {
  const [inputText, setInputText] = useState("");
  const [inputImage, setInputImage] = useState("");

  const dispatch = useAppDispatch();

  const handleCreatePost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      author: "Yuliia Stadnyk",
      avatar: "https://unsplash.com",
      time: "Just now",
      text: inputText,
      image: inputImage.trim() || "",
      likesCount: 0,
    };

    dispatch(addPostAC(newPost));
    setInputText("");
    setInputImage("");
  };

  return (
    <form onSubmit={handleCreatePost} className={s.createCard}>
      <PostHeader inputText={inputText} setInputText={setInputText}/>
      <Button type="submit" className={s.submitBtn} text="create" />
      {/* <PostFooter inputImage={inputImage} setInputImage={setInputImage}/> */}
    </form>
  );
};

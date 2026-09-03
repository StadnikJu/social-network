import s from "./PostHeader.module.css";

type PostHeaderProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export const PostHeader = ({inputText, setInputText}: PostHeaderProps) => {
  return (
    <div className={s.inputRow}>
      <p>Yuliia</p>
      <img src="https://unsplash.com" alt="Your Avatar" className={s.userAvatar} />
      <textarea
        placeholder="What's on your mind?"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className={s.textarea}
      />
    </div>
  );
};

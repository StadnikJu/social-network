import { Button } from "@/common/components";
import s from "./PostFooter.module.css";

type PostFooterProps = {
  inputImage: string;
  setInputImage: React.Dispatch<React.SetStateAction<string>>;
};

export const PostFooter = ({inputImage, setInputImage}: PostFooterProps) => {
  return (
    <div className={s.formFooter}>
      <input
        type="text"
        placeholder="Paste image URL (optional)..."
        value={inputImage}
        onChange={(e) => setInputImage(e.target.value)}
        className={s.imageInput}
      />
      <Button type="submit" className={s.submitBtn} text="create" />
    </div>
  );
};
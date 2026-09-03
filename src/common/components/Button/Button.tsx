import s from "./Button.module.css"

export type ButtonProps = {
  text: string | number;
  variant?: "default" | "subscribed";
  type?: "submit" | "button";
  onClick?: () => void
};

export const Button = ({ text, variant, type = "button", onClick }: ButtonProps) => {
  return (
    <button 
      type={type}  
      className={`${s.submitBtn} ${variant === "subscribed" ? s.subscribed : ""}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};
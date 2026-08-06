export type ButtonProps = {
  text: string;
  className: string;
  type?: "submit" | "button";
  onClick?: () => void
};

export const Button = ({ text, className, type = "button", onClick }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};
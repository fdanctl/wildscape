export function SecundaryBtnS({
  text,
  className,
  type = "button",
  onclick,
}: {
  text: string;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onclick: () => void;
}) {
  return (
    <button
      className={`border border-primaryGreen text-primaryGreen text-xl px-5 py-1 rounded transition-all duration-200 ease-in-out ${className} hover:brightness-125`}
      type={type}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

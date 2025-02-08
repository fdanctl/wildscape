export function MainBtnS({
  text,
  className,
  onclick,
}: {
  text: string;
  className?: string;
  onclick: () => void;
}) {
  return (
    <button
      className={`bg-primaryGreen text-grayish text-xl px-5 py-1 rounded transition-all duration-200 ease-in-out ${className} hover:brightness-125`}
      type="button"
      onClick={onclick}
    >
      {text}
    </button>
  );
}

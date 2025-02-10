export function SecundaryBtn({
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
      className={`border-2 border-primaryGreen text-primaryGreen text-3xl px-12 py-4 rounded-xl transition-all duration-200 ease-in-out ${className} hover:brightness-125`}
      type="button"
      onClick={onclick}
    >
      {text}
    </button>
  );
}

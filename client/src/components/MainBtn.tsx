export function MainBtn({
  text,
  className,
  onclick,
}: {
  text: string;
  className: string;
  onclick: () => void
}) {
  return (
    <button
      className={`bg-primaryGreen text-grayish text-3xl px-12 py-4 rounded-xl ${className}`}
      type="button"
      onClick={onclick}
    >
      {text}
    </button>
  );
}

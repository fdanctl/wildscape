export function GridBtn({
  text,
  onclick,
  className,
}: {
  text: string;
  onclick: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onclick}
      className={`rounded-xl flex items-center justify-center font-bold text-primaryGreen cursor-pointer ${className} hover:bg-secundaryGreen`}
    >
      <p className="font-bold text-5xl">{text}</p>
    </div>
  );
}

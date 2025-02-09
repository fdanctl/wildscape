import { Link } from "react-router-dom";

export function GridBtn({
  text,
  className,
}: {
  text: "Wildlife"| "Resources";
  className?: string;
}) {
  return (
    <Link
      to={`/${text.toLowerCase()}`}
      className={`rounded-xl flex items-center justify-center font-bold text-primaryGreen cursor-pointer ${className} hover:bg-secundaryGreen`}
    >
      <p className="font-bold text-5xl">{text}</p>
    </Link>
  );
}

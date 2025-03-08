import { XSvg } from "./XSvg";

export function NeedDiv({
  name,
  onclick,
}: {
  name: string;
  onclick?: () => void;
}) {
  return (
    <>
      <button
        className="flex gap-2 justify-center items-center rounded-lg px-2 py-1 self-end border border-black transition-all duration-200 ease-in-out hover:brightness-105"
        onClick={onclick}
        type="button"
      >
        <p className="text-sm">{name}</p>
        <XSvg size={10} color="#000"/>
      </button>
    </>
  );
}

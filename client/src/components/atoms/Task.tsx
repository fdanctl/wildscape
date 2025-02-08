import { useState } from "react";

export function Task({
  handleDone,
  text,
  done,
}: {
  handleDone: () => void;
  text: string;
  done: boolean;
}) {
  const [clicked, setClick] = useState(false);
  const style = done
    ? "bg-primaryGreen text-grayish"
    : "border border-primaryGreen text-primaryGreen";
  return (
    <>
      {clicked ? (
        <div
          className={`py-6 px-8 rounded-xl flex flex-col items-start ${style} [&_p]:font-bold`}
          onClick={() => setClick((ps) => !ps)}
        >
          <p>{text}</p>
          <div className="flex self-stretch justify-between">
            <p>some some</p>
            <p className="cursor-pointer underline" onClick={handleDone}>
              {done ? "Undo" : "Done"}
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`py-6 px-8 rounded-xl flex flex-col items-start ${style} [&_p]:font-bold`}
          onClick={() => setClick((ps) => !ps)}
        >
          <p>{text}</p>
        </div>
      )}
    </>
  );
}

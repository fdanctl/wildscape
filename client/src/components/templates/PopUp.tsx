import { ReactNode } from "react";

export function PopUp({
  children,
  close,
}: {
  children: ReactNode;
  close: () => void;
}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute z-10">
      <div
        className="w-full h-full bg-black opacity-50 absolute"
        onClick={close}
      ></div>
      {children}
    </div>
  );
}

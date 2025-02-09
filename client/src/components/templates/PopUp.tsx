import { ReactNode } from "react";

export function PopUp({
  children,
  setvisibility,
}: {
  children: ReactNode;
  setvisibility: () => void;
}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute">
      <div
        className="w-full h-full bg-black opacity-50 absolute"
        onClick={setvisibility}
      ></div>
      {children}
    </div>
  );
}

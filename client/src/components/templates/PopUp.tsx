import { ReactNode } from "react";

export function PopUp({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute z-10">
      <div
        className="w-full h-full bg-black opacity-50 absolute"
        onClick={()=>console.log("close")}
      ></div>
      {children}
    </div>
  );
}

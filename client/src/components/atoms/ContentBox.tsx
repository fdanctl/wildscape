import { ReactNode } from "react";

export function ContentBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-grayish rounded-3xl flex flex-col gap-4 pt-4 pb-6 px-6">
      {children}
    </div>
  );
}

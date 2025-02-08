import { ReactNode } from "react";
import { Header } from "../molecules/Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="px-14 h-screen max-h-screen grid grid-rows-[auto,1fr] gap-4">
      <Header employeeRole="zookeeper" employeeName="Luigi" />
      <div className="max-h-[calc(100vh-125px)]">{children}</div>
    </div>
  );
}

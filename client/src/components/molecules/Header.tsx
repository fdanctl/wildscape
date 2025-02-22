import { useEffect, useState } from "react";
import { useClock } from "../../hooks/useClock";
import { capitalize } from "../../lib/utils";

export function Header({
  employeeName,
  employeeRole,
}: {
  employeeName: string;
  employeeRole: string;
}) {
  const date = useClock()

  return (
    <header className="flex justify-between items-center text-grayish pt-2">
      <div className="flex flex-col">
        <p className="text-2xl font-bold">{employeeName}</p>
        <p className="text-base">{capitalize(employeeRole)}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg">
          {date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-base">{date.toLocaleTimeString("en-US")}</p>
      </div>
    </header>
  );
}

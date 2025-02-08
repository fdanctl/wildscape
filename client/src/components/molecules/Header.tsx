import { useEffect, useState } from "react";

export function Header({
  employeeName,
  employeeRole,
}: {
  employeeName: string;
  employeeRole: string;
}) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <header className="flex justify-between items-center text-grayish pt-2">
      <div className="flex flex-col">
        <p className="text-2xl font-bold">{employeeName}</p>
        <p className="text-base">
          {employeeRole[0].toUpperCase() + employeeRole.slice(1)}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg">
          {date.toLocaleDateString("en", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-base">{date.toLocaleTimeString("en")}</p>
      </div>
    </header>
  );
}

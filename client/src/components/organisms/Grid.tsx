import { Task } from "../atoms/Task";
import { GridBtn } from "../molecules/GridBtn";
import { StatCard } from "../molecules/StatCard";

export function Grid() {
  // 11 x 10 (hxw)
  const test = [
    { text: "text", done: false },
    { text: "text", done: false },
    { text: "text", done: false },
    { text: "text", done: false },
    { text: "text", done: false },
    { text: "other text", done: true },
    { text: "other text", done: true },
    { text: "other text", done: true },
  ];
  return (
    <div className="grid grid-cols-10 gap-2 h-full text-center [&>div]:bg-grayish [&>a]:bg-grayish">
      <StatCard
        className="rounded-xl col-span-2"
        title="Total of animals"
        value="000"
      />
      <div className="rounded-xl col-span-2">
        <p>Diferent Species</p>
        <p>0000</p>
      </div>
      <div className="rounded-xl col-span-2">
        <p>hdoewihf</p>
        <p>0000</p>
      </div>
      <div className="rounded-xl col-span-4 row-span-11 overflow-y-auto">
        <p className="font-bold text-3xl mb-6">Your Daily Tasks</p>
        <div className="flex flex-col gap-1">
          {test.map((e) => (
            <Task
              // key
              text={e.text}
              done={e.done}
              handleDone={() => console.log("bruh")}
            />
          ))}
        </div>
      </div>
      <div className="rounded-xl col-span-6 row-span-8">
        <p>Species</p>
      </div>
      <GridBtn
        className="col-span-3 row-span-2"
        text="Wildlife"
      />
      <GridBtn
        className="col-span-3 row-span-2"
        text="Resources"
      />
    </div>
  );
}

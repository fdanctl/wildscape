import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { ResourceWithStats } from "../../models/resource";
import { MedSvg } from "../atoms/MedSvg";
import { SteakSvg } from "../atoms/SteakSvg";

export function ResourceCard({
  obj,
  add,
  remove,
  setCurrResource,
}: {
  obj: ResourceWithStats;
  add: () => void;
  remove: () => void;
  setCurrResource: Dispatch<SetStateAction<string | null>>;
}) {
  const [visibility, setVisibility] = useState<boolean>(false);

  const svgMap = new Map([
    ["food", <SteakSvg />],
    ["med", <MedSvg />],
  ]);

  const daysColor =
    obj.daysLeft == null || obj.daysLeft === "Infinity"
      ? "text-xs"
      : obj.daysLeft > 30
        ? "text-[#008767]"
        : obj.daysLeft > 7
          ? "text-[#766A01]"
          : "text-[#ff0000]";

  return (
    <div
      className="flex flex-col gap-2 border border-primaryGreen rounded-xl pr-2 pl-6 py-4 cursor-pointer hover:brightness-150"
      onClick={() => setVisibility((ps) => !ps)}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-6 items-center">
          {svgMap.get(obj.type)}
          <p className="text-xl font-bold text-primaryGreen">{obj.name}</p>
        </div>
        <div className="flex items-center gap-6 text-center [&>p]:w-24 text-lg font-bold text-primaryGreen">
          <p>{`${obj.quantity} ${obj.unit}`}</p>
          <p>{`${obj.dailyConsumption} ${obj.unit}`}</p>
          <p className={`${daysColor}`}>
            {obj.daysLeft === "Infinity" ? "Undetermined" : obj.daysLeft}
          </p>
        </div>
      </div>
      {visibility && (
        <div className="self-end flex items-center gap-6 text-center [&>button]:w-24 text-lg font-bold text-primaryGreen">
          <button
            onClick={() => {
              setCurrResource(obj._id);
              remove();
            }}
          >
            Remove
          </button>
          <button
            onClick={() => {
              setCurrResource(obj._id);
              add();
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}

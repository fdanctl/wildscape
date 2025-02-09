import { ResourceWithStats } from "../../models/resource";
import { MedSvg } from "../atoms/MedSvg";
import { SteakSvg } from "../atoms/SteakSvg";

export function ResourceCard({ obj }: { obj: ResourceWithStats }) {
  const svgMap = new Map([
    ["food", <SteakSvg />],
    ["med", <MedSvg />],
  ]);

  const daysColor =
    !obj.daysLeft || obj.daysLeft === "Undetermined" || obj.daysLeft > 30
      ? "text-[#008767]"
      : obj.daysLeft > 7
        ? "text-[#766A01]"
        : "text-[#ff0000]";

  return (
    <div className="flex items-center justify-between border border-primaryGreen rounded-xl pr-2 pl-6 py-4 cursor-pointer hover:border-2">
      <div className="flex gap-6">
        {svgMap.get(obj.type)}
        <p className="text-xl font-bold text-primaryGreen">{obj.name}</p>
      </div>
      <div className="flex gap-6 text-center [&>p]:w-24 text-lg font-bold text-primaryGreen">
        <p>{`${obj.quantity} ${obj.unit}`}</p>
        <p>{`${obj.dailyConsumption} ${obj.unit}`}</p>
        <p className={`${daysColor}`}>{obj.daysLeft}</p>
      </div>
    </div>
  );
}

import { capitalize } from "../../lib/utils";
import { AnimalWithId } from "../../models/animal";

export function AnimalCard({ obj }: { obj: AnimalWithId }) {
  return (
    <div className="flex items-center justify-between border border-primaryGreen rounded-xl pr-2 pl-6 py-4 cursor-pointer hover:brightness-150">
      <div className="flex gap-6">
        <p className="text-xl font-bold text-primaryGreen">{obj.name}</p>
      </div>
      <div className="flex gap-6 text-center [&>p]:w-24 text-lg font-bold text-primaryGreen">
        <p>{`${obj.age} ${obj.age <= 1 ? "yr" : "yrs"}`}</p>
        <p>{capitalize(obj.gender)}</p>
        <p>{capitalize(obj.species)}</p>
      </div>
    </div>
  );
}

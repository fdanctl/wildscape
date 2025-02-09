import { AnimalWithId } from "../../models/animal";

export function AnimalCard({ obj }: { obj: AnimalWithId}) {


  return (
    <div className="flex items-center justify-between border border-primaryGreen rounded-xl pr-2 pl-6 py-4 cursor-pointer hover:border-2">
      <div className="flex gap-6">
        <p className="text-xl font-bold text-primaryGreen">{obj.name}</p>
      </div>
      <div className="flex gap-6 text-center [&>p]:w-24 text-lg font-bold text-primaryGreen">
        <p>{obj.species[0].toUpperCase() + obj.species.slice(1)}</p>
        <p>{obj.gender[0].toUpperCase() + obj.gender.slice(1)}</p>
      </div>
    </div>
  );
}

import { AnimalWithId } from "../../models/animal";
import { AnimalCard } from "../molecules/AnimalCard";

export function AnimalList({ list }: { list: AnimalWithId[] }) {
  return (
    <>
      {list.length === 0 ? (
        <p className="text-center text-primaryGreen">No resources found</p>
      ) : (
        <div className="flex flex-col gap-2 overflow-y-auto">
          {list.map((e) => (
            <AnimalCard key={e._id} obj={e} />
          ))}
        </div>
      )}
    </>
  );
}

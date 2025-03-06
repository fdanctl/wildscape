import { AnimalFilters, useAnimalFilters } from "../../hooks/useAnimalFilters";

export function FilterOptBtn({
  name,
  selected,
  type,
  value,
}: {
  name: string;
  selected: boolean;
  type: "order" | "gender";
  value: AnimalFilters["order"] | AnimalFilters["gender"];
}) {
  const { setAnimalFilters } = useAnimalFilters();

  return (
    <>
      {!selected ? (
        <button
          className="rounded-lg px-4 py-2 self-end border border-primaryGreen transition-all duration-200 ease-in-out hover:brightness-105"
          onClick={() => setAnimalFilters({ [type]: value })}
        >
          <p className="text-primaryGreen">{name}</p>
        </button>
      ) : (
        <button
          className="rounded-lg px-4 py-2 self-end border border-primaryGreen bg-primaryGreen transition-all duration-200 ease-in-out hover:brightness-105"
          onClick={() => setAnimalFilters({ [type]: value }, true)}
        >
          <p className="text-grayish">{name}</p>
        </button>
      )}
    </>
  );
}

import { AnimalFilters, useAnimalFilters } from "../../hooks/useAnimalFilters";
import { XSvg } from "./XSvg";

export function CurrFilterBtn({
  name,
  type,
  value,
  onclick,
}: {
  name: string;
  type: "ageRange" | "gender" | "species";
  value:
  | AnimalFilters["order"]
  | AnimalFilters["gender"]
  | AnimalFilters["species"];
  onclick?: () => void;
}) {
  const { setAnimalFilters } = useAnimalFilters();

  return (
    <>
      <button
        className="flex gap-2 justify-center items-center rounded-lg px-4 py-2 self-end border border-primaryGreen transition-all duration-200 ease-in-out hover:brightness-105"
        onClick={() => {
          setAnimalFilters({ [type]: value }, true);
          !!onclick && onclick();
        }}
      >
        <p className="text-primaryGreen">{name}</p>
        <XSvg />
      </button>
    </>
  );
}

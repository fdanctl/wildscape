import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { CheckBox } from "../atoms/CheckBox";

export function SpeciesFilters() {
  const { species } = useAnimalFilters();

  const speciesOpt = [
    {
      name: "Lion",
      value: "lion",
      selected: !species ? false : species.includes("lion"),
    },
    {
      name: "Penguin",
      value: "penguin",
      selected: !species ? false : species.includes("penguin"),
    },
  ];

  return (
    <div>
      {speciesOpt.map((e, i) => (
        <div className="flex gap-2 items-center mb-1" key={i.toString()}>
          <CheckBox
            id={e.value}
            name={e.value}
            value={e.value}
            selected={e.selected}
          />
          <label className="text-lg" htmlFor={e.value}>
            {e.name}
          </label>
        </div>
      ))}
    </div>
  );
}

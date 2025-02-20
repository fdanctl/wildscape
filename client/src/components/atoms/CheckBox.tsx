import { AnimalFilters, useAnimalFilters } from "../../hooks/useAnimalFilters";

export function CheckBox({
  id,
  name,
  selected,
  value,
}: {
  id: string;
  name: string;
  selected: boolean;
  value: AnimalFilters["species"];
}) {
  const { setAnimalFilters } = useAnimalFilters();

  return (
    <input
      className="appearance-none rounded m-0 w-6 h-6 bg-grayish border border-primaryGreen flex items-center justify-center cursor-pointer checked:before:rounded checked:bg-grayish checked:before:w-4 checked:before:h-4 checked:before:bg-primaryGreen checked:before:block"
      type={"checkbox"}
      id={id}
      name={name}
      value={value}
      checked={selected}
      onChange={() =>
        !selected
          ? setAnimalFilters({ species: value })
          : setAnimalFilters({ species: value }, true)
      }
    />
  );
}

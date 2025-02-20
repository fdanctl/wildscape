import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { ArrowSvg } from "../atoms/ArrowSvg";
import { BackArrowSvg } from "../atoms/BackArrowSvg";
import { CheckBox } from "../atoms/CheckBox";
import { FilterOptBtn } from "../atoms/FilterOptBtn";
import { XSvg } from "../atoms/XSvg";

export function SpeciesFilterBar() {
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
    <div className="flex flex-col justify-between text-primaryGreen h-full w-1/3 px-7 pt-10 pb-7 bg-grayish absolute right-0 z-10">
      <div className="[&>div]:mb-4">
        <div className="flex justify-between items-center">
          <i
            className="justify-self-end cursor-pointer"
            onClick={() => console.log("fechar")}
          >
            <BackArrowSvg />
          </i>
          <p className="font-bold text-2xl">Species</p>
          <i
            className="justify-self-end cursor-pointer"
            onClick={() => console.log("fechar")}
          >
            <XSvg />
          </i>
        </div>
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
      </div>
      <p className="text-center">Showing 10 results</p>
    </div>
  );
}

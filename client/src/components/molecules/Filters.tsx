import { AnimalFilters, useAnimalFilters } from "../../hooks/useAnimalFilters";
import { ArrowSvg } from "../atoms/ArrowSvg";
import { DoubleSlider } from "../atoms/DoubleSlider";
import { FilterOptBtn } from "../atoms/FilterOptBtn";

export function Filters({ openSpecies }: { openSpecies: () => void }) {
  const { order, species, gender, ageRange, clearAnimalFilters } =
    useAnimalFilters();

  const currUsedFilters = (gender || [])
    .concat(species || [])
    .concat(ageRange ? `Age Range [${ageRange.join("-")}]` : []);

  const orderOpt = [
    {
      name: "A-Z",
      value: "nameAsc" as AnimalFilters["order"],
    },
    {
      name: "Z-A",
      value: "nameDesc" as AnimalFilters["order"],
    },
    {
      name: "Youngest to Oldest",
      value: "ageAsc" as AnimalFilters["order"],
    },
    {
      name: "Oldest to Youngest",
      value: "ageDesc" as AnimalFilters["order"],
    },
  ];

  const genderOpt = [
    {
      name: "Male",
      value: "male" as AnimalFilters["gender"],
    },
    {
      name: "Female",
      value: "female" as AnimalFilters["gender"],
    },
  ];

  return (
    <>
      {currUsedFilters.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-1">
            {currUsedFilters.map((e, i) => (
              <div
                key={i.toString()}
                className="border border-primaryGreen flex gap-1 p-1"
              >
                <p>{e}</p>
                <p>X</p>
              </div>
            ))}
          </div>
          <p className="font-bold cursor-pointer" onClick={clearAnimalFilters}>
            Limpar filtros
          </p>
        </div>
      )}
      <div>
        <p className="font-bold text-2xl mb-2">Order</p>
        <div className="flex flex-wrap gap-2">
          {orderOpt.map((e, i) => (
            <FilterOptBtn
              key={i.toString()}
              name={e.name}
              selected={order === e.value}
              type="order"
              value={e.value as AnimalFilters["order"]}
            />
          ))}
        </div>
      </div>
      <div
        className="flex justify-between items-center cursor-pointer transition-all duration-200 ease-in-out hover:brightness-125 [&>*:nth-child(2)]:hover:mr-[-5px]"
        onClick={openSpecies}
      >
        <p className="font-bold text-2xl">Species</p>
        <i className="transition-all duration-200 ease-in-out">
          <ArrowSvg />
        </i>
      </div>
      <div>
        <p className="font-bold text-2xl">Age</p>
        <DoubleSlider />
      </div>
      <div>
        <p className="font-bold text-2xl mb-2">Gender</p>
        <div className="flex flex-wrap gap-2">
          {genderOpt.map((e, i) => (
            <FilterOptBtn
              key={i.toString()}
              name={e.name}
              selected={!gender ? false : gender.includes(e.value as string)}
              type="gender"
              value={e.value}
            />
          ))}
        </div>
      </div>
    </>
  );
}

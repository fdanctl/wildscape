import { AnimalFilters, useAnimalFilters } from "../../hooks/useAnimalFilters";
import { ArrowSvg } from "../atoms/ArrowSvg";
import { DoubleSlider } from "../atoms/DoubleSlider";
import { FilterOptBtn } from "../atoms/FilterOptBtn";

export function Filters({ openSpecies }: { openSpecies: () => void }) {
  const { order, gender } = useAnimalFilters();

  const genderOpt = [
    {
      name: "Male",
      value: "male",
      selected: !gender ? false : gender.includes("male"),
    },
    {
      name: "Female",
      value: "female",
      selected: !gender ? false : gender.includes("female"),
    },
  ];

  const orderOpt = [
    {
      name: "A-Z",
      value: "nameAsc",
      selected: order === "nameAsc",
    },
    {
      name: "Z-A",
      value: "nameDes",
      selected: order === "nameDes",
    },
    {
      name: "Youngest to Oldest",
      value: "ageAsc",
      selected: order === "ageAsc",
    },
    {
      name: "Oldest to Youngest",
      value: "ageDes",
      selected: order === "ageDes",
    },
  ];

  return (
    <>
      <div>
        <p className="font-bold text-2xl mb-2">Order</p>
        <div className="flex flex-wrap gap-2">
          {orderOpt.map((e, i) => (
            <FilterOptBtn
              key={i.toString()}
              name={e.name}
              selected={e.selected}
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
              selected={e.selected}
              type="gender"
              value={e.value as AnimalFilters["gender"]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

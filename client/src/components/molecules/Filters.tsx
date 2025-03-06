import { useEffect, useState } from "react";
import {
  defaultAgeRange,
  AnimalFilters,
  useAnimalFilters,
} from "../../hooks/useAnimalFilters";
import { ArrowSvg } from "../atoms/ArrowSvg";
import { DoubleSlider } from "../atoms/DoubleSlider";
import { FilterOptBtn } from "../atoms/FilterOptBtn";
import { useDebounce } from "../../hooks/useDebounce";
import { CurrFilterBtn } from "../atoms/CurrFilterBtn";
import { capitalize } from "../../lib/utils";

export function Filters({ openSpecies }: { openSpecies: () => void }) {
  const {
    order,
    species,
    gender,
    ageRange,
    clearAnimalFilters,
    setAnimalFilters,
  } = useAnimalFilters();

  // age related
  const minAge = defaultAgeRange[0];
  const maxAge = defaultAgeRange[1];

  const [range, setRange] = useState(ageRange || [minAge, maxAge]);
  const debouncedRange = useDebounce(range);

  const gap = 1;

  useEffect(() => {
    setAnimalFilters({ ageRange: debouncedRange });
  }, [debouncedRange]);

  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange((ps) => [
      Math.min(Number(e.target.value), ps ? ps[1] - gap : maxAge),
      ps ? ps[1] : maxAge,
    ]);
  };

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange((ps) => [
      ps ? ps[0] : minAge,
      Math.max(Number(e.target.value), ps ? ps[0] + gap : minAge),
    ]);
  };
  //end

  const currUsedFilters = (
    gender?.map((e) => ({
      name: capitalize(e),
      type: "gender",
      value: e,
    })) || []
  )
    .concat(
      species?.map((e) => ({
        name: capitalize(e),
        type: "species",
        value: e,
      })) || [],
    )
    .concat(
      ageRange
        ? {
          name: `Age Range [${ageRange.join("-")}]`,
          type: "ageRange",
          value: "value",
        }
        : [],
    );

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
              <CurrFilterBtn
                key={i.toString()}
                name={e.name}
                type={e.type as "species" | "gender" | "ageRange"}
                value={e.value}
                onclick={
                  e.type === "ageRange"
                    ? () => setRange([minAge, maxAge])
                    : undefined
                }
              />
            ))}
          </div>
          <p
            className="font-bold cursor-pointer"
            onClick={() => {
              clearAnimalFilters();
              setRange([minAge, maxAge]);
            }}
          >
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
        <DoubleSlider
          range={range}
          min={minAge}
          max={maxAge}
          handleChangeMax={handleChangeMax}
          handleChangeMin={handleChangeMin}
        />
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

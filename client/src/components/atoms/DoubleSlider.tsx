import { useEffect, useState } from "react";
import { defaultAgeRange, useAnimalFilters } from "../../hooks/useAnimalFilters";
import { useDebounce } from "../../hooks/useDebounce";

export function DoubleSlider() {
  const minAge = defaultAgeRange[0]
  const maxAge = defaultAgeRange[1]

  const { ageRange, setAnimalFilters } = useAnimalFilters();
  const [range, setRange] = useState(ageRange || [minAge, maxAge]);
  const debouncedRange = useDebounce(range);

  const gap = 1;
  const maxGap = maxAge - minAge;

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

  useEffect(() => {
    setAnimalFilters({ ageRange: range });
  }, [debouncedRange]);

  return (
    <>
      <div className="flex justify-between">
        <p>{range[0] || minAge}</p>
        <p>{range[1] || maxAge}</p>
      </div>

      <div className="relative w-full h-full mt-2">
        <div className="appearance-none bg-white rounded-full w-full h-[3px] top-[-1px] bottom-0 absolute" />

        <div
          className="appearance-none bg-primaryGreen rounded-full h-[8px] top-[-3px] bottom-0 absolute"
          style={{
            left: `${Math.floor((range[0] / maxGap) * 100)}%`,
            right: `${Math.floor((range[1] / maxGap) * 100)}%`,
            width: `${Math.floor((range[1] / maxGap) * 100) - Math.floor((range[0] / maxGap) * 100)}%`,
          }}
        />
        <input
          className="appearance-none w-full outline-none m-auto top-0 bottom-0 bg-transparent pointer-events-auto absolute cursor-pointer"
          type="range"
          min="0"
          max="100"
          value={range[0] || minAge}
          id="slider-1"
          onChange={(e) => handleChangeMin(e)}
        />
        <input
          className="appearance-none w-full outline-none m-auto top-0 bottom-0 bg-transparent pointer-events-auto absolute cursor-pointer"
          type="range"
          min={minAge}
          max={maxAge}
          value={range[1] || maxAge}
          id="slider-2"
          onChange={(e) => handleChangeMax(e)}
        />
      </div>
    </>
  );
}

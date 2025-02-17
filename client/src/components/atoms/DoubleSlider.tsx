import { useState } from "react";

export function DoubleSlider() {
  const [range, setRange] = useState({ min: 0, max: 100 });
  const gap = 1;
  const maxGap = 100; // max - min

  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange((ps) => ({
      ...ps,
      min: Math.min(Number(e.target.value), range.max - gap),
    }));
  };

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange((ps) => ({
      ...ps,
      max: Math.max(Number(e.target.value), range.min + gap),
    }));
  };

  return (
    <>
      <div className="flex justify-between">
        <p>{range.min}</p>
        <p>{range.max}</p>
      </div>

      <div className="relative w-full h-full mt-2">
        <div className="appearance-none bg-white rounded-full w-full h-[3px] top-[-1px] bottom-0 absolute" />

        <div
          className="appearance-none bg-primaryGreen rounded-full h-[8px] top-[-3px] bottom-0 absolute"
          style={{
            left: `${Math.floor((range.min / maxGap) * 100)}%`,
            right: `${Math.floor((range.max / maxGap) * 100)}%`,
            width: `${Math.floor((range.max / maxGap) * 100) - Math.floor((range.min / maxGap) * 100)}%`,
          }}
        />
        <input
          className="appearance-none w-full outline-none m-auto top-0 bottom-0 bg-transparent pointer-events-auto absolute cursor-pointer"
          type="range"
          min="0"
          max="100"
          value={range.min}
          id="slider-1"
          onChange={(e) => handleChangeMin(e)}
        />
        <input
          className="appearance-none w-full outline-none m-auto top-0 bottom-0 bg-transparent pointer-events-auto absolute cursor-pointer"
          type="range"
          min="0"
          max="100"
          value={range.max}
          id="slider-2"
          onChange={(e) => handleChangeMax(e)}
        />
      </div>
    </>
  );
}

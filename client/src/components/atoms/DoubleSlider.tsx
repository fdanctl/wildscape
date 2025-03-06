export function DoubleSlider({
  range,
  min,
  max,
  handleChangeMax,
  handleChangeMin,
}: {
  range: number[];
  min: number;
  max: number;
  handleChangeMax: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMin: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const maxGap = max - min;

  return (
    <>
      <div className="flex justify-between">
        <p>{range[0] || min}</p>
        <p>{range[1] || max}</p>
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
          value={range[0] || min}
          id="slider-1"
          onChange={(e) => handleChangeMin(e)}
        />
        <input
          className="appearance-none w-full outline-none m-auto top-0 bottom-0 bg-transparent pointer-events-auto absolute cursor-pointer"
          type="range"
          min={min}
          max={max}
          value={range[1] || max}
          id="slider-2"
          onChange={(e) => handleChangeMax(e)}
        />
      </div>
    </>
  );
}

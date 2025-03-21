import { useState } from "react";
import { BackArrowSvg } from "../atoms/BackArrowSvg";
import { XSvg } from "../atoms/XSvg";
import { Filters } from "./Filters";
import { SpeciesFilters } from "./SpeciesFilters";

export function FilterBar({
  resultsNum,
  close,
}: {
  resultsNum: number;
  close: () => void;
}) {
  const [showingSpecies, setShowingSpecies] = useState<boolean>(false);


  return (
    <div className="flex flex-col justify-between text-primaryGreen h-full w-1/3 px-7 pt-10 pb-7 bg-grayish absolute right-0 z-10">
      <div className="[&>div]:mb-4">
        <div className="flex justify-between items-center">
          <div>
            {showingSpecies && (
              <i
                className="justify-self-end cursor-pointer"
                onClick={() => setShowingSpecies(false)}
              >
                <BackArrowSvg />
              </i>
            )}
          </div>
          <p className="font-bold text-2xl">
            {showingSpecies ? "Species" : "Filters"}
          </p>
          <i className="justify-self-end cursor-pointer" onClick={close}>
            <XSvg />
          </i>
        </div>
        <div>
        </div>
        {showingSpecies ? (
          <SpeciesFilters />
        ) : (
          <Filters openSpecies={() => setShowingSpecies(true)} />
        )}
      </div>
      <p className="text-center">Showing {resultsNum} results</p>
    </div>
  );
}

import { ArrowSvg } from "../atoms/ArrowSvg";
import { BackArrowSvg } from "../atoms/BackArrowSvg";
import { CheckBox } from "../atoms/CheckBox";
import { FilterOptBtn } from "../atoms/FilterOptBtn";
import { XSvg } from "../atoms/XSvg";

export function SpeciesFilterBar() {
  const species = ["lion", "penguin"];
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
          {species.map((e) => (
            <div className="flex gap-2 items-center mb-1">
              <CheckBox />
              <label className="text-lg">{e}</label>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center">Showing 10 results</p>
    </div>
  );
}

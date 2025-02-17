import { ArrowSvg } from "../atoms/ArrowSvg";
import { DoubleSlider } from "../atoms/DoubleSlider";
import { FilterOptBtn } from "../atoms/FilterOptBtn";
import { XSvg } from "../atoms/XSvg";

export function FilterBar() {
  const gender: string[] = ["Male", "Female"];
  const order: string[] = [
    "A-Z",
    "Z-A",
    "Youngest to Oldest",
    "Oldest to Youngest",
  ];
  return (
    <div className="flex flex-col justify-between text-primaryGreen h-full w-1/3 px-7 pt-10 pb-7 bg-grayish absolute right-0 z-10">
      <div className="[&>div]:mb-4">
        <div className="flex justify-between items-center">
          <div></div>
          <p className="font-bold text-2xl">Filters</p>
          <i
            className="justify-self-end cursor-pointer"
            onClick={() => console.log("fechar")}
          >
            <XSvg />
          </i>
        </div>
        <div>
          {/* filters */}
          <p className="font-bold">Limpar filtros</p>
        </div>
        <div>
          <p className="font-bold text-2xl mb-2">Order</p>
          <div className="flex flex-wrap gap-2">
            {order.map((e) => (
              <FilterOptBtn name={e} selected={false} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center cursor-pointer transition-all duration-200 ease-in-out hover:brightness-125 [&>*:nth-child(2)]:hover:mr-[-5px]">
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
            {gender.map((e) => (
              <FilterOptBtn name={e} selected={true} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center">Showing 10 results</p>
    </div>
  );
}

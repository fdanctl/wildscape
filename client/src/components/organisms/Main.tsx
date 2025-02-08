import { MainBtnS } from "../atoms/MainBtnS";
import { SearchBar } from "../molecules/SearchBar";

export function Main({ title }: { title: string }) {
  const searchTerm = title === "Wildlife" ? "Animal" : title.slice(0, -1);
  return (
    <div className="bg-grayish rounded-3xl min-h-full">
      <h2 className="text-4xl text-center font-bold font-heading text-primaryGreen">
        {title}
      </h2>
      <div className="grid gap-3 grid-cols-[1fr,auto]">
        <SearchBar placeholder={searchTerm} />
        <MainBtnS
          text="Add" 
          onclick={() => console.log("bruh")}
          />
      </div>
    </div>
  );
}

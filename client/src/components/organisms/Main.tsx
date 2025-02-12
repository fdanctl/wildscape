import { useState } from "react";
import { MainBtnS } from "../atoms/MainBtnS";
import { SearchBar } from "../molecules/SearchBar";
import { AnimalList } from "./AnimalList";
import { ResourceList } from "./ResourceList";

export function Main({
  title,
}: {
  title: "Wildlife" | "Resources" | "Employees";
}) {
  const [search, setSearch] = useState<string>("");
  const searchTerm: "Animal" | "Resource" | "Employee" =
    title === "Wildlife"
      ? "Animal"
      : title === "Resources"
        ? "Resource"
        : "Employee";

  const tagMap = new Map([
    ["Wildlife", <AnimalList search={search} />],
    ["Resources", <ResourceList search={search} />],
    ["Employees", <ResourceList search={search} />],
  ]);

  return (
    <div className="bg-grayish rounded-3xl flex flex-col gap-4 pt-4 pb-6 px-6">
      <h2 className="text-4xl text-center font-bold font-heading text-primaryGreen">
        {title}
      </h2>
      <div className="grid gap-3 grid-cols-[1fr,auto]">
        <SearchBar
          placeholder={searchTerm}
          value={search}
          onchange={(s) => setSearch(s)}
        />
        <MainBtnS text="Add" onclick={() => console.log("bruh")} />
      </div>
      {tagMap.get(title)}
    </div>
  );
}

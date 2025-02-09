import { useEffect, useState } from "react";
import { AnimalWithId } from "../../models/animal";
import { FilterBtn } from "../atoms/FilterBtn";
import { AnimalCard } from "../molecules/AnimalCard";

export function AnimalList({ search }: { search: string }) {
  const [animals, setAnimals] = useState<AnimalWithId[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/animals");
      const body = await response.json();
      setAnimals(body);
    };
    fetchData();
  }, []);

  return (
    <>
      {animals.length === 0 ? (
        <p className="text-center text-primaryGreen">No resources found</p>
      ) : (
        <>
          <FilterBtn />
          <div className="flex flex-col gap-2 h-[310px] overflow-y-auto">
            {animals
              .filter((e) => e.name.toLowerCase().includes(search))
              .sort((a, b) => {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
              })
              .map((e) => (
                <AnimalCard key={e._id} obj={e} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

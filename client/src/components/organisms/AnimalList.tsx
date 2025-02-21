import { useEffect, useState } from "react";
import { AnimalWithId } from "../../models/animal";
import { AnimalCard } from "../molecules/AnimalCard";

export function AnimalList() {
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
        <div className="flex flex-col gap-2 overflow-y-auto">
          {animals.map((e) => (
            <AnimalCard key={e._id} obj={e} />
          ))}
        </div>
      )}
    </>
  );
}

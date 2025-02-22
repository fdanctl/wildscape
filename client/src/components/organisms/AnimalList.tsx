import { useEffect, useState } from "react";
import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { AnimalWithId } from "../../models/animal";
import { AnimalCard } from "../molecules/AnimalCard";

export function AnimalList() {
  const [animals, setAnimals] = useState<AnimalWithId[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<AnimalWithId[]>([]);
  const { searchParams, q, order, species, gender } = useAnimalFilters();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/animals");
      const body = await response.json();
      setAnimals(body);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredAnimals(
      [...animals].filter(
        (e) =>
          (!q || e.name.toLowerCase().includes(q.toLowerCase())) &&
          (!species || species.includes(e.species)) &&
          (!gender || gender.includes(e.gender)),
      ),
    );
    console.log(filteredAnimals);
  }, [animals, searchParams]);

  return (
    <>
      {filteredAnimals.length === 0 ? (
        <p className="text-center text-primaryGreen">No resources found</p>
      ) : (
        <div className="flex flex-col gap-2 overflow-y-auto">
          {filteredAnimals.map((e) => (
            <AnimalCard key={e._id} obj={e} />
          ))}
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { AnimalWithId } from "../models/animal";
import { useAnimalFilters } from "./useAnimalFilters";

// for filtering in client-side
export function useFilteredAnimals(animals: AnimalWithId[]) {
  const [filteredAnimals, setFilteredAnimals] = useState<AnimalWithId[]>([]);
  const { searchParams, q, order, species, gender } = useAnimalFilters();

  const nameAsc = (a: AnimalWithId, b: AnimalWithId) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  };

  const nameDesc = (a: AnimalWithId, b: AnimalWithId) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? 1 : textA > textB ? -1 : 0;
  };

  const ageAsc = (a: AnimalWithId, b: AnimalWithId) => a.age - b.age;

  const ageDesc = (a: AnimalWithId, b: AnimalWithId) => b.age - a.age;

  const actionMap = new Map([
    ["nameAsc", nameAsc],
    ["nameDesc", nameDesc],
    ["ageAsc", ageAsc],
    ["ageDesc", ageDesc],
  ]);

  useEffect(() => {
    setFilteredAnimals(
      [...animals]
        .filter(
          (e) =>
            (!q || e.name.toLowerCase().includes(q.toLowerCase())) &&
            (!species || species.includes(e.species)) &&
            (!gender || gender.includes(e.gender)),
        )
        .sort((a, b) => (actionMap.get(order || "nameAsc") || nameAsc)(a, b)),
    );
  }, [animals, searchParams]);

  return filteredAnimals;
}

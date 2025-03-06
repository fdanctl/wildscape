import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export interface AnimalFilters {
  q?: string;
  order?: "nameAsc" | "nameDesc" | "ageAsc" | "ageDesc";
  species?: string;
  gender?: "male" | "female";
  ageRange?: number[];
}

export const defaultAgeRange = [0, 100];

export function useAnimalFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q");
  const order = searchParams.get("order");
  const species = searchParams.get("species")?.split("|");
  const gender = searchParams.get("gender")?.split("|");
  const ageRange = searchParams
    .get("ageRange")
    ?.split("-")
    ?.map((e) => Number(e));
  const filtersCount =
    (species?.length || 0) + (gender?.length || 0) + (ageRange ? 1 : 0);

  const setAnimalFilters = useCallback(
    (filters: AnimalFilters, remove = false) => {
      setSearchParams((params) => {
        if (filters.q !== undefined) {
          if (filters.q.length === 0) {
            params.delete("q");
          } else {
            params.set("q", filters.q);
          }
        }

        if (filters.order !== undefined) {
          if (remove) {
            params.delete("order");
          } else {
            params.set("order", filters.order);
          }
        }

        if (filters.species !== undefined) {
          let newSpecies = [];
          if (remove && species) {
            newSpecies = species.filter((e) => e !== filters.species);
          } else {
            newSpecies = (species || []).concat(filters.species);
          }

          newSpecies.length === 0
            ? params.delete("species")
            : params.set("species", newSpecies.join("|"));
        }

        if (filters.gender !== undefined) {
          let newGender = [];
          if (remove && gender) {
            newGender = gender.filter((e) => e !== filters.gender);
          } else {
            newGender = (gender || []).concat(filters.gender);
          }

          newGender.length === 0
            ? params.delete("gender")
            : params.set("gender", newGender.join("|"));
        }

        if (filters.ageRange !== undefined) {
          if (
            remove ||
            JSON.stringify(filters.ageRange) === JSON.stringify(defaultAgeRange)
          ) {
            params.delete("ageRange");
          } else {
            params.set("ageRange", Object.values(filters.ageRange).join("-"));
          }
        }

        return params;
      });
    },
    [gender, setSearchParams, species],
  );

  const clearAnimalFilters = useCallback(() => {
    setSearchParams();
  }, [setSearchParams]);

  return {
    searchParams,
    q,
    order,
    species,
    gender,
    ageRange,
    filtersCount,
    setAnimalFilters,
    clearAnimalFilters,
  };
}

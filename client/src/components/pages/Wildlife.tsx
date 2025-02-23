import { useCallback, useEffect, useState } from "react";
import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { useDebounce } from "../../hooks/useDebounce";
import { ContentBox } from "../atoms/ContentBox";
import { FilterBtn } from "../atoms/FilterBtn";
import { Title } from "../atoms/Title";
import { SearchAndAddBar } from "../molecules/SearchAndAddBar";
import { AnimalList } from "../organisms/AnimalList";
import { AnimalForm } from "../molecules/AnimalForm";
import { FilterBar } from "../molecules/FilterBar";
import { Layout } from "../templates/Layout";
import { PopUp } from "../templates/PopUp";
import { AnimalWithId } from "../../models/animal";
import { useFilteredAnimals } from "../../hooks/useFilteredAnimals";

interface WildlifePopUpState {
  baseFilters: boolean;
  animalForm: boolean;
  speciesFilters: boolean;
}

export function Wildlife() {
  const [animals, setAnimals] = useState<AnimalWithId[]>([]);
  const filteredAnimals = useFilteredAnimals(animals);

  const { q, filtersCount, setAnimalFilters } = useAnimalFilters();

  const [search, setSearch] = useState<string>(q || "");
  const debouncedSearch = useDebounce(search);

  const [popUpsState, setPopUpsState] = useState<WildlifePopUpState>({
    baseFilters: false,
    animalForm: false,
    speciesFilters: false,
  });

  // api call when page is loaded
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/animals");
      const body = await response.json();
      setAnimals(body);
    };
    fetchData();
  }, []);

  //set q filter when local search state doesnt change for 500ms
  useEffect(() => {
    setAnimalFilters({ q: debouncedSearch });
  }, [debouncedSearch]);

  const handleChange = useCallback(
    (s: string) => {
      setSearch(s);
    },
    [search],
  );

  const closeAllPopUps = () => {
    setPopUpsState((ps) => {
      return Object.keys(ps).reduce(
        (acc, key) => ({ ...acc, [key as keyof WildlifePopUpState]: false }),
        {} as WildlifePopUpState,
      );
    });
  };

  return (
    <>
      {popUpsState.animalForm && (
        <PopUp close={closeAllPopUps}>
          <AnimalForm />
        </PopUp>
      )}
      {popUpsState.baseFilters && (
        <PopUp close={closeAllPopUps}>
          <FilterBar
            resultsNum={filteredAnimals.length}
            close={() =>
              setPopUpsState((ps) => ({ ...ps, baseFilters: false }))
            }
          />
        </PopUp>
      )}
      <Layout>
        <ContentBox>
          <Title title="Wildlife" />
          <SearchAndAddBar
            searchPlaceholder="Animal name"
            searchValue={search}
            searchOnChange={handleChange}
            addBtnOnClick={() =>
              setPopUpsState((ps) => ({ ...ps, animalForm: true }))
            }
          />
          <FilterBtn
            filters={filtersCount}
            onclick={() =>
              setPopUpsState((ps) => ({ ...ps, baseFilters: true }))
            }
          />
          <AnimalList list={filteredAnimals} />
        </ContentBox>
      </Layout>
    </>
  );
}

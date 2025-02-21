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

interface WildlifePopUpState {
  baseFilters: boolean;
  animalForm: boolean;
  speciesFilters: boolean;
}

export function Wildlife() {
  const { q, filtersCount, setAnimalFilters } = useAnimalFilters();
  const [search, setSearch] = useState<string>(q || "");
  const debouncedSearch = useDebounce(search);

  const [popUpsState, setPopUpsState] = useState<WildlifePopUpState>({
    baseFilters: false,
    animalForm: false,
    speciesFilters: false,
  });

  useEffect(() => {
    setAnimalFilters({ q: search });
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

    console.log(popUpsState);
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
          <AnimalList />
        </ContentBox>
      </Layout>
    </>
  );
}

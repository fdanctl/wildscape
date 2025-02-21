import { useCallback, useEffect, useState } from "react";
import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { useDebounce } from "../../hooks/useDebounce";
import { ContentBox } from "../atoms/ContentBox";
import { Title } from "../atoms/Title";
import { AddForm } from "../molecules/AddForm";
import { ConfirmationNttf } from "../molecules/ConfirmationNttf";
import { RemoveConfirm } from "../molecules/RemoveConfirm";
import { ResourceForm } from "../molecules/ResourceForm";
import { SearchAndAddBar } from "../molecules/SearchAndAddBar";
import { ResourceList } from "../organisms/ResourceList";
import { Layout } from "../templates/Layout";
import { PopUp } from "../templates/PopUp";

interface ResourcesPopUpState {
  nttf: boolean;
  addForm: boolean;
  resourceForm: boolean;
  removeConfirm: boolean;
}

export function Resources() {
  const { q, setAnimalFilters } = useAnimalFilters();
  const [search, setSearch] = useState<string>(q || "");
  const debouncedSearch = useDebounce(search);

  const [popUpsState, setPopUpsState] = useState<ResourcesPopUpState>({
    nttf: false,
    addForm: false,
    resourceForm: false,
    removeConfirm: false,
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
        (acc, key) => ({ ...acc, [key as keyof ResourcesPopUpState]: false }),
        {} as ResourcesPopUpState,
      );
    });

    console.log(popUpsState);
  };

  return (
    <>
      {popUpsState.nttf && (
        <ConfirmationNttf
          type="resource"
          name="Feline Food"
          quantity={400}
          units="kg"
        />
      )}
      {popUpsState.addForm && (
        <PopUp close={closeAllPopUps}>
          <AddForm />
        </PopUp>
      )}
      {popUpsState.resourceForm && (
        <PopUp close={closeAllPopUps}>
          <ResourceForm />
        </PopUp>
      )}
      {popUpsState.removeConfirm && (
        <PopUp close={closeAllPopUps}>
          <RemoveConfirm type="resource" name="Feline Food" />
        </PopUp>
      )}
      <Layout>
        <ContentBox>
          <Title title="Resources" />
          <SearchAndAddBar
            searchPlaceholder="Resource name"
            searchValue={search}
            searchOnChange={handleChange}
            addBtnOnClick={() =>
              setPopUpsState((ps) => ({ ...ps, resourceForm: true }))
            }
          />
          <ResourceList />
        </ContentBox>
      </Layout>
    </>
  );
}

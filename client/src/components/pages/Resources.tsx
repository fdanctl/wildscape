import { useCallback, useEffect, useState } from "react";
import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { useDebounce } from "../../hooks/useDebounce";
import { ResourceWithStats } from "../../models/resource";
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

  const [resources, setResources] = useState<ResourceWithStats[]>([]);

  const [popUpsState, setPopUpsState] = useState<ResourcesPopUpState>({
    nttf: false,
    addForm: false,
    resourceForm: false,
    removeConfirm: false,
  });

  const [currResourceId, setCurrResourceId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/resources");
      const body: ResourceWithStats[] = await response.json();
      setResources(body);
    };
    fetchData();
  }, [
    popUpsState.addForm,
    popUpsState.resourceForm,
    popUpsState.removeConfirm,
  ]);

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
          <AddForm
            resourceId={currResourceId}
            close={() => {
              setPopUpsState((ps) => ({ ...ps, addForm: false }));
              setCurrResourceId(null);
            }}
          />
        </PopUp>
      )}
      {popUpsState.resourceForm && (
        <PopUp close={closeAllPopUps}>
          <ResourceForm
            close={() => {
              setPopUpsState((ps) => ({ ...ps, resourceForm: false }));
              setCurrResourceId(null);
            }}
          />
        </PopUp>
      )}
      {popUpsState.removeConfirm && (
        <PopUp close={closeAllPopUps}>
          <RemoveConfirm
            id={currResourceId}
            type="resource"
            close={() => {
              setPopUpsState((ps) => ({ ...ps, removeConfirm: false }));
              setCurrResourceId(null);
            }}
          />
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
          <ResourceList
            list={resources.filter(
              (e) => !q || e.name.toLowerCase().includes(q.toLowerCase()),
            )}
            add={() => setPopUpsState((ps) => ({ ...ps, addForm: true }))}
            remove={() =>
              setPopUpsState((ps) => ({ ...ps, removeConfirm: true }))
            }
            setCurrResource={setCurrResourceId}
          />
        </ContentBox>
      </Layout>
    </>
  );
}

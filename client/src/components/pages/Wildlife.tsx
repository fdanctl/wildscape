import { AnimalForm } from "../molecules/AnimalForm";
import { FilterBar } from "../molecules/FilterBar";
import { SpeciesFilterBar } from "../molecules/SpeciesFilterBar";
import { Main } from "../organisms/Main";
import { Layout } from "../templates/Layout";
import { PopUp } from "../templates/PopUp";

export function Wildlife() {
  return (
    <>
      {/*
      <PopUp>
        <AnimalForm />
      </PopUp>
      <PopUp>
        <FilterBar />
        <SpeciesFilterBar />
      </PopUp>
      */}
      <Layout>
        <Main title="Wildlife" />
      </Layout>
    </>
  );
}

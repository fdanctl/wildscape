import { AnimalForm } from "../molecules/AnimalForm";
import { Main } from "../organisms/Main";
import { Layout } from "../templates/Layout";
import { PopUp } from "../templates/PopUp";

export function Wildlife() {
  return (
    <>
      <PopUp>
        <AnimalForm />
      </PopUp>
      <Layout>
        <Main title="Wildlife" />
      </Layout>
    </>
  );
}

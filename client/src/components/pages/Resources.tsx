import { AddForm } from "../molecules/AddForm";
import { ConfirmationNttf } from "../molecules/ConfirmationNttf";
import { RemoveConfirm } from "../molecules/RemoveConfirm";
import { ResourceForm } from "../molecules/ResourceForm";
import { Main } from "../organisms/Main";
import { Layout } from "../templates/Layout";
import { PopUp } from "../templates/PopUp";

export function Resources() {
  return (
    <>
      {/*
      <ConfirmationNttf type="resource" name="Feline Food" quantity={400} units="kg" />
      */}
      <PopUp>
        <AddForm />
      </PopUp>
      {/*
      <PopUp>
        <ResourceForm/>
      </PopUp>
      <PopUp>
        <RemoveConfirm type="resource" name="Feline Food"/>
      </PopUp>
      */}
      <Layout>
        <Main title="Resources" />
      </Layout>
    </>
  );
}

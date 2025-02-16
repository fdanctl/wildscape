import { LowResourcesNttf } from "../molecules/LowResourcesNttf";
import { Grid } from "../organisms/Grid";
import { Layout } from "../templates/Layout";

export function Dashboard() {
  return (
    <>
      <LowResourcesNttf quantity={2} />
      <Layout>
        <Grid />
      </Layout>
    </>
  );
}

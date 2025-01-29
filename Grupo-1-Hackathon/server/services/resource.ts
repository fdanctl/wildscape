import { FindAllAnimals } from "../data/animal";
import {
  ChangeResource,
  FindResources,
  FindResourceByName,
  InsertResource,
  FindResourceByNameSearch,
} from "../data/resource";
import {
  Resource,
  ResourceDeduction,
  ResourceWithStats,
} from "../models/resource";

export async function ReadResources() {
  const result = await FindResources();
  let newResult: ResourceWithStats[] = result.concat();
  const animals = await FindAllAnimals();
  for (let i = 0; i < result.length; i++) {
    const sum = animals.reduce((total, val) => {
      return (
        total +
        val.dailyNeeds.reduce(
          (acc, need) =>
            need.resource_id === result[i]._id.toString()
              ? acc + need.quantity
              : acc,
          0
        )
      );
    }, 0);

    newResult[i].dailyConsumption = sum;
    newResult[i].daysLeft =
      sum < 1 ? result[i].quantity : result[i].quantity / sum;
  }

  return newResult;
}

export async function CreateResource(body: Resource): Promise<string> {
  const result = await FindResourceByName(body.name);
  if (!result) {
    const id = await InsertResource(body);
    return id;
  }
  return "1";
}

export async function UpdateResource(body: ResourceDeduction) {
  await ChangeResource(body);
  return;
}

export async function ReadResourcesByName(
  str: string
): Promise<Resource[] | null> {
  const animal = await FindResourceByNameSearch(str);

  return animal;
}

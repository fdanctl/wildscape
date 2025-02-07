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

export async function ReadResources(): Promise<ResourceWithStats[]> {
  const result = await FindResources();
  const animals = await FindAllAnimals();
  const consumptionMap = new Map();
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals[i].dailyNeeds.length; j++) {
      consumptionMap.set(
        animals[i].dailyNeeds[j].resource_id,
        (consumptionMap.get(animals[i].dailyNeeds[j].resource_id) | 0) +
        animals[i].dailyNeeds[j].quantity,
      );
    }
  }

  return result.map((e) => ({
    ...e,
    dailyConsumption: consumptionMap.has(e._id.toString())
      ? consumptionMap.get(e._id.toString())
      : 0,
    daysLeft: consumptionMap.has(e._id.toString())
      ? e.quantity / consumptionMap.get(e._id.toString())
      : "Undetermined",
  }));
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
  str: string,
): Promise<Resource[] | null> {
  const animal = await FindResourceByNameSearch(str);

  return animal;
}

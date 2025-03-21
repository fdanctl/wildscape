import { FindAllAnimals } from "../data/animal";
import {
  ChangeResource,
  FindResources,
  FindResourceByName,
  InsertResource,
  FindResourceByNameSearch,
  FindResourceById,
  RemoveResource,
} from "../data/resource";
import {
  Resource,
  ResourceDeduction,
  ResourceWithStats,
  ResourceWithId,
} from "../models/resource";

export async function ReadResources(): Promise<ResourceWithStats[]> {
  const result = await FindResources();
  const animals = await FindAllAnimals();
  const consumptionMap = new Map();
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals[i].dailyNeeds.length; j++) {
      consumptionMap.set(
        animals[i].dailyNeeds[j].resource_id,
        (consumptionMap.get(animals[i].dailyNeeds[j].resource_id) || 0) +
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
      ? Math.floor(e.quantity / consumptionMap.get(e._id.toString()))
      : "Infinity",
  }));
}

export async function ReadResourceById(
  id: string,
): Promise< ResourceWithId | null> {
  const resource = await FindResourceById(id)

  return resource
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

export async function DeleteResource(id: string): Promise<void> {
  await RemoveResource(id);
}

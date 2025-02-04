import {
  Resource,
  ResourceDeduction,
  ResourceWithId,
} from "../models/resource";
import { getMongoCollection } from "./mongodb";
import { ObjectId } from "mongodb";

const col = "resources";
const db = "wildscape";

export async function InsertResource(obj: Resource): Promise<string> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.insertOne(obj);
  return result.insertedId;
}

export async function FindResources(): Promise<ResourceWithId[]> {
  console.log("222222222");

  const collection = await getMongoCollection(db, col);
  console.log("333333333");

  const result = await collection.find({}).toArray();
  console.log("44444444");

  return result;
}

export async function FindResourceByName(
  resourceName: string
): Promise<ResourceWithId[]> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.findOne({ name: resourceName });

  return result;
}

export async function FindResourceByNameSearch(
  str: string
): Promise<ResourceWithId[] | null> {
  const collection = await getMongoCollection(db, col);
  const result = await collection
    .find({ name: { $regex: str, $options: "i" } })
    .toArray();
  return result;
}

export async function RemoveResource(id: string): Promise<void> {
  const newId = new ObjectId(id);
  const collection = await getMongoCollection(db, col);
  await collection.deleteOne({ _id: newId });
}

export async function ChangeResource(obj: ResourceDeduction) {
  const newId = new ObjectId(obj._id);
  console.log(obj.quantity);
  const collection = await getMongoCollection(db, col);
  await collection.updateOne(
    { _id: newId },
    { $inc: { quantity: obj.quantity } }
  );
  return;
}

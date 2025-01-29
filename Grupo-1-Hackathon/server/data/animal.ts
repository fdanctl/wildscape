import { Animal, AnimalWithId } from "../models/animal";
import { getMongoCollection } from "./mongodb";
import { ObjectId } from "mongodb";

const col = "animals";
const db = "zoomania";

export async function InsertAnimal(obj: Animal): Promise<string> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.insertOne(obj);
  return result.insertedId;
}

export async function FindAnimals(animal: string): Promise<AnimalWithId[]> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.find({ species: animal }).toArray();

  return result;
}

export async function FindAllAnimals(): Promise<AnimalWithId[]> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.find().toArray();

  return result;
}

export async function FindAnimalById(id: string): Promise<AnimalWithId | null> {
  const newId = new ObjectId(id);
  const collection = await getMongoCollection(db, col);
  const result = await collection.findOne({ _id: newId });
  return result;
}

export async function ChangeAnimal(id: string, body: Animal) {
  const newId = new ObjectId(id);
  const collection = await getMongoCollection(db, col);
  const result = await collection.updateOne({ _id: newId }, { $set: body });
  return result;
}

export async function RemoveAnimal(id: string): Promise<void> {
  const newId = new ObjectId(id);
  const collection = await getMongoCollection(db, col);
  await collection.deleteOne({ _id: newId });
}

import { Task, TaskWithId } from "../models/tasks";
import { getMongoCollection } from "./mongodb";
import { ObjectId } from "mongodb";

const col = "tasks";
const db = "zoomania";

export async function InsertTask(obj: Task): Promise<string> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.insertOne(obj);
  return result.insertedId;
}

export async function FindTasks(employeeId: string): Promise<TaskWithId[]> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.find({ employee_id: employeeId }).toArray();

  return result;
}

export async function FindAllTasks(): Promise<TaskWithId[]> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.find({}).toArray();

  return result;
}

export async function ChangeTask(id: string, body: Task) {
  const newId = new ObjectId(id);
  const collection = await getMongoCollection(db, col);
  const result = await collection.updateOne({ _id: newId }, { $set: body });
  return result;
}

export async function RemoveTask(id: string): Promise<void> {
  const newId = new ObjectId(id);
  const collection = await getMongoCollection(db, col);
  await collection.deleteOne({ _id: newId });
}

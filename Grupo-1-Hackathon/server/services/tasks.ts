import {
  ChangeTask,
  FindAllTasks,
  FindTasks,
  InsertTask,
  RemoveTask,
} from "../data/tasks";
import { Task } from "../models/tasks";

export async function ReadTasks(employeeId: string) {
  const tasks = await FindTasks(employeeId);
  return tasks;
}

export async function ReadAllTasks() {
  const tasks = await FindAllTasks();
  return tasks;
}

export async function CreateTask(body: Task): Promise<string> {
  const id = await InsertTask(body);
  return id;
}

export async function UpdateTask(id: string, body: Task) {
  await ChangeTask(id, body);
}

export async function DeleteTask(id: string): Promise<void> {
  await RemoveTask(id);
}

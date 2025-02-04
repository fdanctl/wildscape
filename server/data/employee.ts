import { Credentials, Employee, EmployeeWithId } from "../models/employee";
import { getMongoCollection } from "./mongodb";
import { ObjectId } from "mongodb";

const col = "employees";
const db = "wildscape";


export async function InsertEmployee(obj: Employee): Promise<string> {
    const collection = await getMongoCollection(db, col);
    const result = await collection.insertOne(obj);
    return result.insertedId;
}

export async function FindEmployees(): Promise<EmployeeWithId[]> {
    const collection = await getMongoCollection(db, col);
    const result = await collection.find({}).toArray();

    return result;
}

export async function FindEmployeeByNr(
    nr: number,
): Promise<EmployeeWithId | null> {
    const collection = await getMongoCollection(db, col);
    const result = await collection.findOne({ employeeNr: nr });
    return result;
}

export async function FindEmployeeById(
    id: string,
): Promise<EmployeeWithId | null> {
    const newId = new ObjectId(id);
    const collection = await getMongoCollection(db, col);
    const result = await collection.findOne({ _id: newId });
    return result;
}

export async function FindEmployeeByCredentials(
    credentials: Credentials,
): Promise<EmployeeWithId | null> {
    const collection = await getMongoCollection(db, col);
    const result = await collection.findOne({
        employeeNr: Number(credentials.employeeNr),
        password: credentials.password,
    });
    return result;
}

export async function ChangeEmployee(employeeNr: number, body: Employee) {
    const collection = await getMongoCollection(db, col);
    const result = await collection.updateOne(
        { employeeNr: employeeNr },
        { $set: body },
    );
    return result;
}

export async function RemoveEmployee(nr: number): Promise<void> {
    const collection = await getMongoCollection(db, col);
    await collection.deleteOne({ employeeNr: nr });
}

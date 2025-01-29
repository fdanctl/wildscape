import {
    ChangeEmployee,
    FindEmployeeByCredentials,
    FindEmployeeById,
    FindEmployeeByNr,
    InsertEmployee,
    RemoveEmployee,
} from "../data/employee";
import { Credentials, Employee, EmployeeWithId } from "../models/employee";

export async function ReadEmployeeCredentials(
    body: Credentials,
): Promise<string> {
    const employee = await FindEmployeeByCredentials(body);
    if (!employee) {
        return "login failed";
    }

    return employee._id;
}

export async function ReadEmployeeByNr(
    employeeNr: number,
): Promise<EmployeeWithId | null> {
    const employee = await FindEmployeeByNr(employeeNr);

    return employee;
}

export async function ReadEmployeeById(
    id: string,
): Promise<EmployeeWithId | null> {
    const employee = await FindEmployeeById(id);

    return employee;
}

export async function CreateEmployee(body: Employee): Promise<string> {
    const res = await FindEmployeeByNr(body.employeeNr);

    if (!res) {
        const id = await InsertEmployee(body);
        return id;
    }
    return "1";
}

export async function UpdateEmployee(
    nr: number,
    body: Employee,
): Promise<void> {
    await ChangeEmployee(nr, body);
}

export async function DeleteEmployee(nr: number): Promise<void> {
    await RemoveEmployee(nr);
}

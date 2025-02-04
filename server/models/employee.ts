export interface Employee {
    name: string;
    employeeNr: number;
    password: string;
    role: "manager" | "zookeeper";
    tel: number;
    email: string;
}

export interface EmployeeWithId {
    _id: string;
    name: string;
    employeeNr: number;
    password: string;
    role: "manager" | "zookeeper";
    tel: number;
    email: string;
}

export interface Credentials {
    employeeNr: number;
    password: string;
}

export interface Task {
  employee_id: string;
  discription: string;
  todoType: "feed" | "administer";
  species: "string";
  quant: number;
  resource_id: string;
  done: boolean;
}

export interface TaskWithId {
  _id: string;
  employee_id: string;
  discription: string;
  todoType: "feed" | "administer";
  species: "string";
  quant: number;
  resource_id: string;
  done: boolean;
}

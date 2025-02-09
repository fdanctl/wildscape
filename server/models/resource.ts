export interface Resource {
  name: string;
  type: "food" | "med";
  subtype: string | null;
  quantity: number;
  unit: "kg" | "doses" | "tablets";
}

export interface ResourceWithId {
  _id: string;
  name: string;
  type: "food" | "med";
  subtype: string | null;
  quantity: number;
  unit: "kg" | "doses" | "tablets";
}

export interface ResourceWithStats {
  _id: string;
  name: string;
  type: "food" | "med";
  subtype: string | null;
  quantity: number;
  unit: "kg" | "doses" | "tablets";
  dailyConsumption: number;
  daysLeft: number | "Infinity";
}

export interface ResourceDeduction {
  _id: string;
  quantity: number;
}

export interface Animal {
    name: string;
    age: number;
    species: string;
    dailyNeeds: DailyNeeds[];
}

export interface AnimalWithId {
    _id: string;
    name: string;
    age: number;
    species: string;
    dailyNeeds: DailyNeeds[];
}

export interface DailyNeeds {
    resource_id: string;
    quantity: number;
    unit: "kg" | "doses" | "tablets";
}

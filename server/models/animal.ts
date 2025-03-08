export const speciesOptions = [
  "bear",
  "beaver",
  "camel",
  "cheetah",
  "elephant",
  "giraffe",
  "koala",
  "lemur",
  "lion",
  "monkey",
  "owl",
  "parrot",
  "penguin",
  "rabbit",
  "tiger",
  "wolf",
  "zebra",
];

export interface Animal {
    name: string;
    age: number;
    gender: "male" | "female";
    species: string;
    dailyNeeds: DailyNeeds[];
}

export interface AnimalWithId {
    _id: string;
    name: string;
    age: number;
    gender: "male" | "female";
    species: string;
    dailyNeeds: DailyNeeds[];
}

export interface DailyNeeds {
    resource_id: string;
    resourceName: string;
    quantity: number;
    unit: "kg" | "doses" | "tablets";
}

export interface ResourceDTO {
    name: string;
    type: "food" | "med";
    subtype: "string" | null;
    quantity: number;
    unit: "kg" | "doses" | "tablets";
}

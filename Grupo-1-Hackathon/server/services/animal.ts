import {
    ChangeAnimal,
    FindAnimalById,
    FindAnimals,
    InsertAnimal,
    RemoveAnimal,
} from "../data/animal";
import { Animal, AnimalWithId } from "../models/animal";

export async function ReadAllAnimalType(
    animal: string,
): Promise<AnimalWithId[]> {
    const animals = await FindAnimals(animal);
    return animals;
}

export async function ReadAnimalById(id: string): Promise<Animal | null> {
    const animal = await FindAnimalById(id);

    return animal;
}

export async function CreateAnimal(body: Animal): Promise<string> {
    const id = await InsertAnimal(body);
    return id;
}

export async function UpdateAnimal(id: string, body: Animal): Promise<void> {
    await ChangeAnimal(id, body);
}

export async function DeleteAnimal(id: string): Promise<void> {
    await RemoveAnimal(id);
}

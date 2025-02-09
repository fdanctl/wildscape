import { AnimalWithId } from "../../models/animal";
import { FilterBtn } from "../atoms/FilterBtn";
import { AnimalCard } from "../molecules/AnimalCard";

export function AnimalList() {
  const fakedata: AnimalWithId[] = [
    {
      _id: "6799f478828675b64c75f470",
      name: "Simba",
      age: 5,
      gender: "male",
      species: "lion",
      dailyNeeds: [
        {
          quantity: 50,
          unit: "kg",
          resource_id: "6799f2b008e74859037bc3c0",
        },
        {
          quantity: 1,
          unit: "doses",
          resource_id: "6799f3a2828675b64c75f46f",
        },
      ],
    },
    {
      _id: "679a3ef1fd21a421e9bb7f49",
      name: "Gigi",
      age: 7,
      gender: "female",
      species: "giraffe",
      dailyNeeds: [
        {
          quantity: 30,
          unit: "kg",
          resource_id: "679a3d85fd21a421e9bb7f40",
        },
      ],
    },
    {
      _id: "679a3f77fd21a421e9bb7f4f",
      name: "Dumbo",
      age: 12,
      gender: "male",
      species: "elephant",
      dailyNeeds: [
        {
          quantity: 100,
          unit: "kg",
          resource_id: "679a3d85fd21a421e9bb7f40",
        },
      ],
    },
    {
      _id: "6799f478828675b64c75f473",
      name: "Penko",
      age: 3,
      gender: "female",
      species: "penguin",
      dailyNeeds: [
        {
          quantity: 5,
          unit: "kg",
          resource_id: "679a3da2fd21a421e9bb7f42",
        },
      ],
    },
    {
      _id: "679a4023fd21a421e9bb7f56",
      name: "Penny",
      age: 9,
      gender: "female",
      species: "penguin",
      dailyNeeds: [
        {
          quantity: 5,
          unit: "kg",
          resource_id: "679a3da2fd21a421e9bb7f42",
        },
        {
          quantity: 1,
          unit: "tablets",
          resource_id: "679a4060fd21a421e9bb7f59",
        },
      ],
    },
    {
      _id: "679a4103fd21a421e9bb7f60",
      name: "Polly",
      age: 4,
      gender: "female",
      species: "parrot",
      dailyNeeds: [
        {
          quantity: 0.5,
          unit: "kg",
          resource_id: "679a3dc6fd21a421e9bb7f44",
        },
      ],
    },
  ];

  return (
    <>
      {fakedata.length === 0 ? (
        <p className="text-center text-primaryGreen">No resources found</p>
      ) : (
        <>
          <FilterBtn />
          <div className="flex flex-col gap-2 h-[310px] overflow-y-auto">
            {fakedata.map((e) => (
              <AnimalCard key={e._id} obj={e} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

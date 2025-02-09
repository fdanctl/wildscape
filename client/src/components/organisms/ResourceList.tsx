import { ResourceWithStats } from "../../models/resource";
import { ResourceCard } from "../molecules/ResourceCard";

export function ResourceList() {
  const fakedata: ResourceWithStats[] = [
    {
      _id: "6799f2b008e74859037bc3c0",
      name: "Lion Food",
      type: "food",
      subtype: "steak",
      quantity: 350,
      unit: "kg",
      dailyConsumption: 50,
      daysLeft: 7,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 28,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 500,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 500,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 500,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 500,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 500,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 500,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 500,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 500,
    },
    {
      _id: "6799f3a2828675b64c75f46f",
      name: "Lion Vacines",
      type: "med",
      subtype: "vacine",
      quantity: 500,
      unit: "doses",
      dailyConsumption: 1,
      daysLeft: 1,
    },
  ];

  return (
    <div>
      {fakedata.length === 0 ? (
        <p className="text-center text-primaryGreen">
          No resources found
        </p>
      ) : (
        <>
          <div className="flex justify-end gap-6 items-center text-center pr-2 mb-2 [&>p]:w-24 text-primaryGreen font-bold">
            <p>Quantity</p>
            <p>
              Daily
              <br />
              Consumption
            </p>
            <p>Days Left</p>
          </div>
          <div className="flex flex-col gap-2 h-[300px] overflow-y-auto">
          {fakedata.map((e) => (
            <ResourceCard key={e._id} obj={e} />
          ))}
          </div>
        </>
      )}
    </div>
  );
}

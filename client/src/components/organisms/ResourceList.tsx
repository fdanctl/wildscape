import { useEffect, useState } from "react";
import { ResourceWithStats } from "../../models/resource";
import { ResourceCard } from "../molecules/ResourceCard";

export function ResourceList() {
  const [resources, setResources] = useState<ResourceWithStats[]>([]);
  const [visibility, setVisibility] = useState(new Map());

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/resources");
      const body: ResourceWithStats[] = await response.json();
      setResources(body);
      setVisibility(body.reduce((map, ele) => map.set(ele, false), new Map()));
    };
    fetchData();

    console.log(visibility);
  }, []);

  return (
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

      {resources.length === 0 ? (
        <p className="text-center text-primaryGreen">No resources found</p>
      ) : (
        <>
          <div className="flex flex-col gap-2 overflow-y-auto">
            {resources
              .sort((a, b) => Number(a.daysLeft) - Number(b.daysLeft))
              .map((e) => (
                <ResourceCard key={e._id} obj={e} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

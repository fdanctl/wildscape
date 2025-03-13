import { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { ResourceWithStats } from "../../models/resource";
import { ResourceCard } from "../molecules/ResourceCard";

export function ResourceList({
  list,
  add,
  remove,
  setCurrResource,
}: {
  list: ResourceWithStats[];
  add: () => void;
  remove: () => void;
  setCurrResource: Dispatch<SetStateAction<string | null>>;
}) {

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

      {list.length === 0 ? (
        <p className="text-center text-primaryGreen">No resources found</p>
      ) : (
        <>
          <div className="flex flex-col gap-2 overflow-y-auto">
            {list
              .sort((a, b) => Number(a.daysLeft) - Number(b.daysLeft))
              .map((e) => (
                <ResourceCard
                  key={e._id}
                  obj={e}
                  add={add}
                  remove={remove}
                  setCurrResource={setCurrResource}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}

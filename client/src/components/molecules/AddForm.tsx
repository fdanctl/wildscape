import { useEffect, useState } from "react";
import { ResourceWithId } from "../../models/resource";
import { MainBtnS } from "../atoms/MainBtnS";
import { TextInput } from "../atoms/TextInput";

export function AddForm({
  resourceId,
  close,
}: {
  resourceId: string | null;
  close: () => void;
}) {
  const [addQuant, setAddQuant] = useState<string>("");
  const [resource, setResource] = useState<ResourceWithId | null>(null);

  // fetch resource data by id
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3030/api/resources/${resourceId}`,
      );
      const body: ResourceWithId = await response.json();
      setResource(body);
    };
    fetchData();
  }, [resourceId]);

  const handleSubmit = async () => {
    if (addQuant.length !== 0) {
      const body = {
        quantity: Number(addQuant),
      };

      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      const response = await fetch(
        `http://localhost:3030/api/resources/${resourceId}`,
        options,
      );

      if (!response.ok) {
        console.log("TRATAR DE ERRO");
      } else {
        close();
      }
    } else {
      alert("please filled all entries");
    }
  };

  return (
    <form className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col">
      <h2 className="font-bold text-3xl text-center mb-5">{resource?.name}</h2>
      <div className="grid grid-cols-[auto,3fr,1fr] gap-4 [&_p]: text-lg">
        <div className="flex flex-col gap-2 items-end [&>p]:font-bold [&>p]:after:content-[':']">
          <p>Current quantity</p>
          <p>Add quantity</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{resource?.quantity + " " + resource?.unit}</p>
          <div className="flex gap-2">
            <TextInput
              className="max-w-20 !bg-grayish"
              onchange={(e) => setAddQuant(e.target.value)}
              value={addQuant}
            />
            <p>{resource?.unit}</p>
          </div>
        </div>
      </div>
      <MainBtnS
        text="Add"
        className="self-end mt-4"
        onclick={handleSubmit}
      />
    </form>
  );
}

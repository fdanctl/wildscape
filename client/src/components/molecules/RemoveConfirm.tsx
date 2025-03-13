import { useEffect, useState } from "react";
import { AnimalWithId } from "../../models/animal";
import { ResourceWithId } from "../../models/resource";
import { MainBtn } from "../atoms/MainBtn";
import { SecundaryBtn } from "../atoms/SecundaryBtn";

export function RemoveConfirm({
  id,
  type,
  close,
}: {
  id: string | null;
  type: "resource" | "animal";
  close: () => void;
}) {
  const [data, setData] = useState<ResourceWithId | AnimalWithId | null>(null);

  // fetch resource data by id
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3030/api/${type + "s"}/${id}`,
      );
      const body: ResourceWithId = await response.json();
      setData(body);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `http://localhost:3030/api/${type + "s"}/${id}`,
      options,
    );

    if (!response.ok) {
      console.log("TRATAR DE ERRO");
    } else {
      close();
    }
  };

  return (
    <div className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col gap-8 max-w-[80vw] text-center font-bold">
      <h2 className="text-4xl font bold">
        {`Are you sure you want to remove ${data?.name} from ${type + "s"}?`}
      </h2>
      <div className="flex gap-4 self-end">
        <SecundaryBtn text="Yes" onclick={handleSubmit} />
        <MainBtn text="No" onclick={close} />
      </div>
    </div>
  );
}

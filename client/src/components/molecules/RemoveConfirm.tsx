import { useEffect, useState } from "react";
import { ResourceWithId } from "../../models/resource";
import { MainBtn } from "../atoms/MainBtn";
import { SecundaryBtn } from "../atoms/SecundaryBtn";

export function RemoveConfirm({
  resourceId,
  type,
  close,
}: {
  resourceId: string | null;
  type: "resource" | "animal";
  close: () => void;
}) {
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
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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
  };

  return (
    <div className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col gap-8 max-w-[80vw] text-center font-bold">
      <h2 className="text-4xl font bold">
        {`Are you sure you want to remove ${resource?.name} from ${type + "s"}?`}
      </h2>
      <div className="flex gap-4 self-end">
        <SecundaryBtn text="Yes" onclick={handleSubmit} />
        <MainBtn text="No" onclick={close} />
      </div>
    </div>
  );
}

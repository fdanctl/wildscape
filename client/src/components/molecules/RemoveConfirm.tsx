import { MainBtn } from "../atoms/MainBtn";
import { SecundaryBtn } from "../atoms/SecundaryBtn";

export function RemoveConfirm({
  type,
  name,
}: {
  type: "animal" | "resource" | "employee";
  name: string;
}) {
  return (
    <div className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col gap-8 max-w-[80vw] text-center font-bold">
      <h2 className="text-4xl font bold">
        {`Are you sure you want to remove ${name} from ${type + "s"}?`}
      </h2>
      <div className="flex gap-4 self-end">
        <SecundaryBtn text="Yes" onclick={() => console.log("bruh")} />
        <MainBtn text="No" onclick={() => console.log("bruh")} />
      </div>
    </div>
  );
}

export function ConfirmationNttf({
  type,
  name,
  quantity,
  units,
}: {
  type: "animal" | "resource" | "employee";
  name: string;
  quantity?: number;
  units?: "kg" | "doses" | "tablets";
}) {
  return (
    <div className="rounded-xl bg-secundaryGreen px-6 py-8 absolute z-10 right-5 bottom-5 max-w-md">
      <p className="text-2xl font-bold text-center">
        {`${!(!quantity || !units) ? `${quantity} ${units} of` : ""} ${name} added to ${type + "s"}`}
      </p>
    </div>
  );
}

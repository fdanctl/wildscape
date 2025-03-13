import { useEffect, useState } from "react";
import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { capitalize, isFormFilled } from "../../lib/utils";
import { Resource, ResourceWithId } from "../../models/resource";
import { MainBtnS } from "../atoms/MainBtnS";
import { RadioBtn } from "../atoms/RadioBtn";
import { TextInput } from "../atoms/TextInput";
import { RadionSection } from "./RadioSection";

interface Form {
  name: string;
  type: "food" | "med" | "";
  subtype: string | null;
  quantity: string;
  unit: "kg" | "doses" | "tablets" | "";
}

export function ResourceForm({ close }: { close: () => void }) {
  const { q } = useAnimalFilters();

  const [form, setForm] = useState<Form>({
    name: q ? capitalize(q) : "",
    type: "",
    subtype: "",
    quantity: "",
    unit: "",
  });

  const typeLabel = [
    { label: "food", value: "food" },
    { label: "medicine", value: "med" },
  ];

  const unitLabel = [
    { label: "kg", value: "kg" },
    { label: "doses", value: "doses" },
    { label: "tablets", value: "tablets" },
  ];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Form,
  ) => {
    if (field !== "quantity" || Number.isInteger(Number(e.target.value))) {
      setForm((ps) => ({ ...ps, [field]: e.target.value }));
    }
  };

  const handleSubmit = async () => {
    const filledForm = form;
    filledForm.subtype =
      filledForm.subtype?.length === 0 ? null : filledForm.subtype;
    if (isFormFilled(form)) {
      const body: Resource = {
        name: form.name,
        type: form.type as Resource["type"],
        subtype: form.subtype,
        quantity: Number(form.quantity),
        unit: form.unit as Resource["unit"],
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      const response = await fetch(
        "http://localhost:3030/api/resources",
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
      <h2 className="font-bold text-3xl text-center mb-5">Add New Resource</h2>
      <div className="flex gap-4 [&_p]: text-lg">
        <div className="flex flex-col items-end gap-2 [&>p]:font-bold [&>p]:after:content-[':']">
          <p>Name</p>
          <p>Type</p>
          <p>Subtype</p>
          <p>Quantity</p>
          <p>Unit</p>
        </div>
        <div className="flex flex-col gap-2">
          <TextInput
            className="!bg-grayish"
            onchange={(e) => handleFormChange(e, "name")}
            value={form.name}
          />
          <RadionSection>
            {typeLabel.map((e, i) => (
              <RadioBtn
                key={i.toString()}
                label={e.label}
                name="type"
                value={e.value}
                id={e.value}
                checked={e.value === form.type}
                onchange={(e) => handleFormChange(e, "type")}
              />
            ))}
          </RadionSection>
          <TextInput
            className="!bg-grayish"
            onchange={(e) => handleFormChange(e, "subtype")}
            value={form.subtype === null ? "" : form.subtype}
          />
          <TextInput
            className="max-w-20 !bg-grayish"
            onchange={(e) => handleFormChange(e, "quantity")}
            value={form.quantity}
          />
          <RadionSection>
            {unitLabel.map((e, i) => (
              <RadioBtn
                key={i.toString()}
                label={e.label}
                name="unit"
                value={e.value}
                id={e.value}
                checked={e.value === form.unit}
                onchange={(e) => handleFormChange(e, "unit")}
              />
            ))}
          </RadionSection>
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
